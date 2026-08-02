# Fix: task templates no longer shown in the task editor

## Symptoms (user report)

1. Templates don't show in the task editor dropdown ("No templates yet" even when templates exist).
2. Saving a template seems to not persist — but the "Template \"...\" saved" Notice DOES appear and the file IS written to `шаблоны/{slug}/` (confirmed with the user).

## Root cause (confirmed)

A single race condition introduced in commit `4c787f0` (task editor rework):

`src/modals/TaskModal.ts` `onOpen()`:
```ts
void this.plugin.store.loadTemplates(this.project)   // async, not awaited
this.render()                                        // renders immediately
```

`loadTemplates` (`src/store/ProjectStore.ts:285`) synchronously executes
`project.taskTemplates = []` before its first `await`, so by the time
`render()` runs the array is always empty → the selector always shows
"No templates yet".

Secondary effect: a still-in-flight `loadTemplates` from `onOpen` can
overwrite `project.taskTemplates` AFTER the user clicks "+ save as template",
dropping the just-saved template from the dropdown → it looks like the
template wasn't saved (the file is fine on disk).

Before `4c787f0`, `onOpen` did not call `loadTemplates`; it relied on
`project.taskTemplates` already being populated by `loadProject`
(`src/store/ProjectStore.ts:418`, `await this.loadTemplates(project)`), so
the dropdown rendered correctly.

## Fix

Make template loading finish before the first render:

```ts
onOpen(): void {
  const { contentEl } = this
  contentEl.empty()
  contentEl.addClass('pm-task-modal')
  this.modalEl.addClass('pm-modal', 'pm-modal--task')
  void this.init()
}

private async init(): Promise<void> {
  try {
    await this.plugin.store.loadTemplates(this.project)
  } finally {
    this.render()
  }
}
```

Rationale:
- `render()` (line 215) starts with `contentEl.empty()` — idempotent, safe to
  call once after templates are loaded.
- Awaiting `loadTemplates` removes the concurrency that let an in-flight scan
  clobber a just-saved template.
- `loadTemplates` is fast (reads a handful of `.md` frontmatter files), so the
  slight delay of the first paint is imperceptible.
- Refreshing on every open is preserved (still re-reads disk), which covers
  templates edited in the ProjectModal.

No changes needed in `ProjectStore.loadTemplates` / `saveTemplate` — the disk
path logic (`{base}/шаблоны/{slug}/`) is correct and unchanged since 28 Jul.

## Verification

- `pnpm check:code`, `pnpm check:types`, `pnpm test` must pass.
- Manual: open task editor → dropdown shows existing templates; "+ save as
  template" → file appears in `шаблоны/{slug}/` and template stays in the
  dropdown.
