# Session Summary — Templates as Separate Files

## Goal

Move project task templates from YAML frontmatter (`project.md` → `taskTemplates: [...]`) into individual `.md` files under a `шаблоны/{slug}/` folder per project.

## What Changed

### 1. `src/types.ts`
- Added `makeTemplate(name: string): TaskTemplate` factory

### 2. `src/store/YamlParser.ts`
- Added `TEMPLATE_FRONTMATTER_KEY = 'pm-template'` — discriminator for template files

### 3. `src/store/YamlHydrator.ts`
- Removed `taskTemplates` from `hydrateProjectFromFrontmatter()` — always returns `[]`
- Added `hydrateTemplateFromFile(fm, body)` — reads a template from a file's frontmatter + body

### 4. `src/store/YamlSerializer.ts`
- Removed `taskTemplates` from `serializeProject()`
- Added `serializeTemplate(tpl)` — writes template frontmatter + YAML subtask list
- Fixed outdated `taskSlug()` call → renamed to `slugify()`

### 5. `src/store/ProjectStore.ts`
- Added `projectTemplateFolder(project)` — resolves `{baseDir}/шаблоны/{slug}/`
- Added `loadTemplates(project)` — scans template folder, hydrates each file
- Added `saveTemplate(project, tpl)` — serializes + writes template to its own file
- Added `deleteTemplate(project, id)` — deletes the file and removes from in-memory array
- `loadProject()` now calls `loadTemplates()` after loading tasks
- `doSaveProject()` no longer writes `taskTemplates` (frontmatter stays clean)
- **Migration**: on `loadProject()`, if `frontmatter.taskTemplates` exists and is non-empty, each entry is written as a separate file, and the project is marked dirty so the old frontmatter field is stripped on next save.

### 6. `src/modals/ProjectModal.ts`
- Template CRUD now uses `store.saveTemplate()` / `store.deleteTemplate()` instead of direct array push/splice
- Template list subheader shows path like `шаблоны/{slug}/`
- Editing a template updates the file via `saveTemplate`

### 7. `src/modals/TaskModal.ts`
- "Save as template" calls `store.saveTemplate()` instead of pushing to `project.taskTemplates`

### 8. `src/modals/SubtasksPanel.ts`
- `onSaveAsTemplate` callback type now allows `Promise<void>`, and call site `await`s it

### 9. Tests
- `yaml-round-trip.test.ts`: replaced `taskTemplates` array-copy test with `toEqual([])` — verifies frontmatter `taskTemplates` is ignored
- All 152 tests pass, typecheck clean

## Disk Layout After Migration

```
Projects/
├── шаблоны/
│   ├── slug-project-a/
│   │   ├── Bug fix.md
│   │   └── Feature.md
│   └── slug-project-b/
│       └── Task list.md
├── Project A.md
├── Project A_tasks/
├── Project B.md
└── Project B_tasks/
```

Each template file:
```yaml
---
pm-template: true
id: <uuid>
name: Bug fix
---
## Subtasks
- Reproduce the issue
- Fix the root cause
- Write tests
```

---

# Session Summary — Auto Status Changes

## Goal

Implement automatic status transitions based on task state:
1. **Feature 1** — parent task status follows the status of its children (farthest-along active child wins)
2. **Feature 2** — task auto-completes when its progress reaches 100%

## What Changed

### 1. `src/types.ts`
- Added `completeStatusId?: string` to `ProjectConfig` — per-project override for which status counts as "complete"
- Added `completeStatusId: string` to `ResolvedProjectConfig` — resolved value with fallback

### 2. `src/store/ProjectConfig.ts`
- `resolveProjectConfig()` now resolves `completeStatusId`: uses project override if valid, otherwise the first `complete: true` status in the list, falling back to `'done'`

### 3. `src/store/TaskTreeOps.ts`
- Added `recalculateParentStatus(parent, statuses, completeStatusId): string | null`
  - If all children are terminal → returns `completeStatusId`
  - If all non-terminal children are in the default status → returns default status id
  - Otherwise → returns the status of the farthest-along active child (highest config index)

### 4. `src/store/ProjectStore.ts`
- `recalcAncestors()` — rewritten to always run (previously returned early when `autoProgressMode !== 'status'`):
  - Progress recalculation only in `'status'` mode
  - Status recalculation (Feature 1) always runs via `recalculateParentStatus()`
  - Auto-complete check (Feature 2) — when `progress === 100` and status is not terminal, sets to `completeStatusId` and stamps today
  - Only `markDirty` when something actually changed
- `updateTask()` — Feature 2 check after patch application + auto-progress recalculation
- `updateTasks()` — Feature 2 check for each task after `recalcAncestors`

### 5. `src/modals/ProjectModal.ts`
- `renderPaletteOverride()` — accepts optional `extraFooter` callback, re-rendered on toggle
- Added `renderCompleteStatusSelect(container)` — dropdown listing all available statuses (custom if enabled, global otherwise), defaults to first `complete: true`
- On change: `patchConfig('completeStatusId', value)`; on revert: `patchConfig('completeStatusId', undefined)`
