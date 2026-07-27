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
