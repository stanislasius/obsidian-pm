# Graph Report - .  (2026-08-03)

## Corpus Check
- 88 files · ~69,004 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1671 nodes · 5249 edges · 68 communities (57 shown, 11 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 605 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Notifier & Gantt Drag|Notifier & Gantt Drag]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_View Switching & Types|View Switching & Types]]
- [[_COMMUNITY_Project Modal & Members|Project Modal & Members]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Chip Button Component|Chip Button Component]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Import & Migration|Import & Migration]]
- [[_COMMUNITY_Kanban Columns & Status Cells|Kanban Columns & Status Cells]]
- [[_COMMUNITY_Task Persistence Ops|Task Persistence Ops]]
- [[_COMMUNITY_Task Storage & Attachments|Task Storage & Attachments]]
- [[_COMMUNITY_Table Rows & Select|Table Rows & Select]]
- [[_COMMUNITY_Kanban Cards & Pickers|Kanban Cards & Pickers]]
- [[_COMMUNITY_Styleguide & Docs|Styleguide & Docs]]
- [[_COMMUNITY_Task Modal & Subtasks|Task Modal & Subtasks]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Project CRUD & Store|Project CRUD & Store]]
- [[_COMMUNITY_Settings & Defaults|Settings & Defaults]]
- [[_COMMUNITY_Test Doubles & Vault|Test Doubles & Vault]]
- [[_COMMUNITY_TSConfig Compiler Options|TSConfig Compiler Options]]
- [[_COMMUNITY_Task Types & Tests|Task Types & Tests]]
- [[_COMMUNITY_Due Date & Field Cells|Due Date & Field Cells]]
- [[_COMMUNITY_Avatars & Popovers|Avatars & Popovers]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Project Docs & Metadata|Project Docs & Metadata]]
- [[_COMMUNITY_Task Form Fields|Task Form Fields]]
- [[_COMMUNITY_Import Modal Wizard|Import Modal Wizard]]
- [[_COMMUNITY_Table View & Bulk Ops|Table View & Bulk Ops]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Task Templates Plan|Task Templates Plan]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Inline Edit & Title Cells|Inline Edit & Title Cells]]
- [[_COMMUNITY_Gantt & Scroll State|Gantt & Scroll State]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Project Header Row|Project Header Row]]
- [[_COMMUNITY_Version Compatibility|Version Compatibility]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Assignees & Avatars|Assignees & Avatars]]
- [[_COMMUNITY_Archive & Template Ops|Archive & Template Ops]]
- [[_COMMUNITY_Time Tracking Cells|Time Tracking Cells]]
- [[_COMMUNITY_Progress & Project Cards|Progress & Project Cards]]
- [[_COMMUNITY_Note Link Suggestion|Note Link Suggestion]]
- [[_COMMUNITY_Plugin Manifest|Plugin Manifest]]
- [[_COMMUNITY_Legacy Bundle Functions|Legacy Bundle Functions]]
- [[_COMMUNITY_Build Styles Script|Build Styles Script]]
- [[_COMMUNITY_Expand & Collapse Controls|Expand & Collapse Controls]]
- [[_COMMUNITY_Formatter Config|Formatter Config]]
- [[_COMMUNITY_Project Loading & Self-heal|Project Loading & Self-heal]]
- [[_COMMUNITY_TsDown Build Config|TsDown Build Config]]
- [[_COMMUNITY_Pnpm Workspace Overrides|Pnpm Workspace Overrides]]
- [[_COMMUNITY_Filter Row Duelabels|Filter Row Duelabels]]
- [[_COMMUNITY_Notifier Component|Notifier Component]]
- [[_COMMUNITY_Import Handler|Import Handler]]
- [[_COMMUNITY_Load All Projects|Load All Projects]]
- [[_COMMUNITY_Template Frontmatter Key|Template Frontmatter Key]]
- [[_COMMUNITY_Priority Chevrons|Priority Chevrons]]

## God Nodes (most connected - your core abstractions)
1. `Project` - 99 edges
2. `Task` - 84 edges
3. `e` - 52 edges
4. `render()` - 50 edges
5. `flattenTasks()` - 39 edges
6. `safeAsync()` - 37 edges
7. `t()` - 35 edges
8. `StatusConfig` - 34 edges
9. `Chip` - 34 edges
10. `constructor()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `KanbanView.buildCardData` --semantically_similar_to--> `renderTaskRow()`  [INFERRED] [semantically similar]
  /home/stanislasius/Projects/Personal/obsidian-pm/src/views/KanbanView.ts → src/views/table/TableRow.ts
- `Project Manager README` --conceptually_related_to--> `Task`  [INFERRED]
  /home/stanislasius/Projects/Personal/obsidian-pm/README.md → src/types.ts
- `Notifier.check` --semantically_similar_to--> `isTaskOverdue()`  [INFERRED] [semantically similar]
  /home/stanislasius/Projects/Personal/obsidian-pm/src/components/Notifier.ts → src/utils.ts
- `ResolvedProjectConfig` --semantically_similar_to--> `renderPaletteOverride`  [INFERRED] [semantically similar]
  src/types.ts → /home/stanislasius/Projects/Personal/obsidian-pm/src/modals/ProjectModal.ts
- `Auto status transitions (parent follows child, auto-complete at 100%)` --references--> `recalculateParentStatus()`  [EXTRACTED]
  /home/stanislasius/Projects/Personal/obsidian-pm/session-summary.md → src/store/TaskTreeOps.ts

## Import Cycles
- 2-file cycle: `src/views/gantt/GanttRenderer.ts -> src/views/gantt/GanttTaskBarRenderer.ts -> src/views/gantt/GanttRenderer.ts`
- 2-file cycle: `src/main.ts -> src/store/index.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/ImportModal.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/main.ts`
- 3-file cycle: `src/modals/SubtasksPanel.ts -> src/ui/ModalFactory.ts -> src/modals/TaskModal.ts -> src/modals/SubtasksPanel.ts`
- 3-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/TaskModal.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/KanbanView.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/ProjectModal.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/DashboardView.ts -> src/views/ProjectListRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/ui/ModalFactory.ts -> src/modals/ImportModal.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/views/table/TableRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/ProjectModal.ts -> src/store/index.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/TaskModal.ts -> src/store/index.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttDragHandler.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttLinkHandler.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/TaskLabelRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/main.ts`

## Hyperedges (group relationships)
- **Undo/redo stack mechanism** — src_main_pmplugin_pushundo, src_main_pmplugin_undolastaction, src_main_pmplugin_redolastaction [INFERRED 0.85]
- **Due-date urgency computation** — src_dates_relativedue, src_utils_istaskoverdue, src_components_notifier_check [INFERRED 0.85]
- **Task templates feature (separate files + load/save path)** — src_types_maketemplate, store_projectstore_loadtemplates, modals_taskmodal_onopen, session_summary_templates_as_files, plans_fix_task_templates_race_plan [INFERRED 0.85]
- **Task editor modal form flow** — modals_taskmodal_taskmodal, modals_taskformfields_rendertaskformfields, modals_subtaskspanel_rendersubtaskspanel, modals_timetrackingpanel_rendertimetrackingpanel [INFERRED 0.85]
- **YAML serialization round-trip pipeline** — store_yamlserializer_serializetask, store_yamlparser_parsefrontmatter, store_yamlhydrator_hydratetaskfromfile, store_yamlserializer_serializeproject, store_yamlhydrator_hydrateprojectfromfrontmatter, store_yamlparser_appendyaml [EXTRACTED 1.00]
- **ProjectStore dirty-set save pipeline** — store_projectstore_projectstore, store_projectstore_saveproject, store_projectstore_savedirtytasks, store_projectstore_savetaskfile, store_projectstore_markdirty [EXTRACTED 1.00]
- **Inline Property Edit Controls** — properties_selectcontrol_renderselectcontrol, properties_datecontrol_renderdatecontrol, properties_multiselectcontrol_rendermultiselect, properties_addproperty_renderaddproperty, properties_optionlist_renderoptionrow, composites_addbutton_renderaddbutton, primitives_popover_popover [INFERRED 0.85]
- **Kanban Card Rendering Flow** — composites_kanbancolumn_kanbancolumn, composites_kanbancard_kanbancard, composites_duechip_renderduechip, composites_tagchip_rendertagchip, composites_timechip_rendertimechip [INFERRED 0.85]
- **Inline-Editable Table Cells** — cells_duedatecell_duedatecell, cells_timecell_timecell, cells_titlecell_titlecell, cells_inlineedit_makeinlineedit [INFERRED 0.85]
- **Gantt chart render pipeline** — gantt_ganttview_ganttview, gantt_ganttheaderrenderer_rendertimelineheader, gantt_ganttrenderer_rendergridlines, gantt_ganttrenderer_rendertodayline, gantt_gantttaskbarrenderer_rendertaskbar, gantt_gantttaskbarrenderer_renderdependencarrows, gantt_gantttaskbarrenderer_rendermilestonelabels, gantt_tasklabelrenderer_rendertasklabel [EXTRACTED 1.00]
- **Gantt timeline edit operations (drag resize, drag move, dependency link, click-to-set-dates)** — gantt_ganttdraghandler_attachdraghandle, gantt_ganttdraghandler_attachbarmove, gantt_ganttlinkhandler_handlelinkdotclick, gantt_gantttaskbarrenderer_renderemptyrowclicktarget, gantt_ganttview_ganttview [INFERRED 0.85]
- **Table multi-select and bulk action flow** — table_tablerow_updateselectallcheckbox, table_tablerow_updateselectedrow, table_tablerenderer_updateselectcheckboxes, table_tablerenderer_handletablekeydown, table_bulkactionbar_renderbulkactionbar, table_tableview_tableview [EXTRACTED 1.00]
- **ProjectView subview lifecycle (SubView protocol)** — views_projectview_projectview, table_tableview_tableview, gantt_ganttview_ganttview, views_kanbanview_kanbanview [EXTRACTED 1.00]

## Communities (68 total, 11 thin omitted)

### Community 0 - "Legacy Bundle Functions"
Cohesion: 0.02
Nodes (146): accept(), al, As, au, bc, beginInlineSave(), bl, bo() (+138 more)

### Community 1 - "Notifier & Gantt Drag"
Cohesion: 0.09
Nodes (48): Notifier, attachBarMove(), attachDragHandle(), DragState, makeDragState(), formatDateRange(), formatWeekLabel(), renderDayHeader() (+40 more)

### Community 2 - "Legacy Bundle Functions"
Cohesion: 0.09
Nodes (61): at(), be(), bn(), bt(), ct(), de(), dt(), e (+53 more)

### Community 3 - "Legacy Bundle Functions"
Cohesion: 0.06
Nodes (57): attach(), bp(), buildCardData(), constructor(), dp(), findParentTask(), format(), handleBack() (+49 more)

### Community 4 - "View Switching & Types"
Cohesion: 0.06
Nodes (11): ViewSwitcherOption, ViewSwitcherProps, makeDefaultFilter(), makeId(), ViewMode, truncateTitle(), filter(), cloneNode() (+3 more)

### Community 5 - "Project Modal & Members"
Cohesion: 0.06
Nodes (33): display(), renderMembersList(), Edit-on-clone modal pattern, patchConfig, PROJECT_COLORS, PROJECT_ICONS, renderCompleteStatusSelect, renderCustomFieldEditor (+25 more)

### Community 6 - "Legacy Bundle Functions"
Cohesion: 0.10
Nodes (48): aa(), ao(), ba(), c(), cr(), cs(), d(), dr() (+40 more)

### Community 7 - "Package Dependencies"
Cohesion: 0.04
Nodes (47): description, devDependencies, @2bad/axiom, @2bad/tsconfig, eslint, eslint-plugin-obsidianmd, lightningcss, npm-run-all2 (+39 more)

### Community 8 - "Legacy Bundle Functions"
Cohesion: 0.10
Nodes (42): a(), ad(), ae(), ai(), bi(), br(), ci(), di() (+34 more)

### Community 9 - "Chip Button Component"
Cohesion: 0.08
Nodes (5): Pill, DUE_LABELS, PrimaryRow, countActiveFilters(), renderFilterDropdown()

### Community 10 - "Legacy Bundle Functions"
Cohesion: 0.10
Nodes (39): b(), ca(), da(), ea(), fo(), hu, it(), ja() (+31 more)

### Community 11 - "Import & Migration"
Cohesion: 0.12
Nodes (29): migrateProjects(), sanitizeFileName(), findTaskFileConflict, ID-prefixed unique filenames, ProjectStore.importNoteAsTask, resolveTaskPath(), saveTaskFile, ProjectStore.saveTemplate (+21 more)

### Community 12 - "Kanban Columns & Status Cells"
Cohesion: 0.14
Nodes (22): PriorityCellProps, KanbanColumnStatus, LabelContext, renderTaskLabel(), FilterRowProps, PriorityConfig, StatusConfig, TaskPriority (+14 more)

### Community 13 - "Task Persistence Ops"
Cohesion: 0.09
Nodes (26): deleteTask, duplicateTask, Incremental dirty-set save, insertTask, markDirty, reconcileSubtasks, saveDirtyTasks, saveProject (+18 more)

### Community 14 - "Task Storage & Attachments"
Cohesion: 0.11
Nodes (18): insertAttachments, configFor, DirtyKind, fileNameFromPath(), loadTaskBody, patchNeedsBodyRewrite(), recalcAncestors, registerCacheInvalidation (+10 more)

### Community 15 - "Table Rows & Select"
Cohesion: 0.14
Nodes (27): SelectCell, SelectCellProps, TaskRow, TaskRowProps, isTaskOverdue(), collectAllAssignees(), collectAllTags(), BulkActionBarOpts (+19 more)

### Community 16 - "Kanban Cards & Pickers"
Cohesion: 0.12
Nodes (15): StatusCellProps, KanbanCardProps, ProjectPickerModal, TagPickerModal, TaskPickerModal, renderTimeTrackingPanel(), Task, TaskStatus (+7 more)

### Community 17 - "Styleguide & Docs"
Cohesion: 0.08
Nodes (16): UI styleguide (component catalog), Chained-setter component API, UI layering: primitives / composites / orchestrators, jp, loadAllProjects(), pickProjectThenCreateTask(), remapOrphanTasks(), setOnImportComplete() (+8 more)

### Community 18 - "Task Modal & Subtasks"
Cohesion: 0.13
Nodes (15): Pull Request Template, Quiet Architect Design System, renderSubtasksPanel(), openOverflowMenu, persistTask, runPersist, confirmDialog(), confirmDuplicateSubtasks() (+7 more)

### Community 19 - "Legacy Bundle Functions"
Cohesion: 0.18
Nodes (32): addTask(), ap(), bf(), bulkAddToArray(), deleteTask(), deleteTasks(), duplicateTask(), Fm() (+24 more)

### Community 20 - "Project CRUD & Store"
Cohesion: 0.18
Nodes (8): makeProject(), Project, moveTask, findParentId(), indexSetParent(), addTaskToTree(), deleteTaskFromTree(), TaskMenuContext

### Community 21 - "Settings & Defaults"
Cohesion: 0.16
Nodes (23): DEFAULT_SETTINGS, DEFAULT_STATUSES, DueDateFilter, PerProjectFilter, SubtaskTemplate, TimeLog, isTerminalStatus(), addDays() (+15 more)

### Community 22 - "Test Doubles & Vault"
Cohesion: 0.12
Nodes (14): bump(), detachFromParent(), expectDefined(), FakeAppLike, FileContent, makeFile(), makeFolder(), relocateFile() (+6 more)

### Community 23 - "TSConfig Compiler Options"
Cohesion: 0.06
Nodes (30): compilerOptions, allowSyntheticDefaultImports, allowUnreachableCode, allowUnusedLabels, erasableSyntaxOnly, esModuleInterop, exactOptionalPropertyTypes, forceConsistentCasingInFileNames (+22 more)

### Community 24 - "Task Types & Tests"
Cohesion: 0.17
Nodes (5): makeTask(), task(), tree(), task(), PEOPLE

### Community 25 - "Due Date & Field Cells"
Cohesion: 0.11
Nodes (8): CustomFieldCellProps, DueDateCellProps, DueUrgency, renderDueChip(), Chip, ChipVariant, CustomFieldDef, formatDateLong()

### Community 26 - "Avatars & Popovers"
Cohesion: 0.17
Nodes (17): Avatar, Popover, PopoverOptions, DateControlOpts, renderDateControl(), MultiSelectOpts, PickerItem, renderMultiSelect() (+9 more)

### Community 27 - "Legacy Bundle Functions"
Cohesion: 0.10
Nodes (28): af(), assignCopyName(), cf(), ef(), ep(), ff(), fp(), getDisplayText() (+20 more)

### Community 28 - "Project Docs & Metadata"
Cohesion: 0.09
Nodes (24): Changelog, Keep a Changelog Standard, Semantic Versioning, Plugin manifest (project-manager), Custom Fields per Project, Custom Statuses and Priorities, Due Date Notifications, Gantt Chart View (+16 more)

### Community 29 - "Task Form Fields"
Cohesion: 0.14
Nodes (17): renderAddButton(), renderCustomFieldInput(), renderTaskFormFields(), REPEAT_OPTIONS, TaskFormFieldsContext, TYPE_OPTIONS, SegmentedControlProps, SegmentedOption (+9 more)

### Community 30 - "Import Modal Wizard"
Cohesion: 0.15
Nodes (4): FileItem, ImportModal, getDefaultPriorityId(), getDefaultStatusId()

### Community 31 - "Table View & Bulk Ops"
Cohesion: 0.16
Nodes (11): safeAsync(), registerStyleguide(), BulkAction, SortDir, TableViewState, taskCount(), openProjectModal(), countTasks() (+3 more)

### Community 32 - "Legacy Bundle Functions"
Cohesion: 0.14
Nodes (23): ah(), dh(), eh(), fh(), ih(), lf(), makeRendererContext(), mh() (+15 more)

### Community 33 - "Task Templates Plan"
Cohesion: 0.13
Nodes (17): TaskModal.onOpen, Await async loads before first render, Fix: task templates race condition, Session Summary (templates + auto status), Templates as separate files migration, makeTemplate(), SavedView, TaskTemplate (+9 more)

### Community 34 - "Legacy Bundle Functions"
Cohesion: 0.15
Nodes (22): Am(), bm(), check(), g(), Gm(), handleKeyDown(), hp(), jm() (+14 more)

### Community 35 - "Legacy Bundle Functions"
Cohesion: 0.11
Nodes (21): applyCollapsedState(), clearDirty(), Cm(), doRefreshTable(), getTasksForStatus(), hydrateDescriptions(), J(), loadProject() (+13 more)

### Community 36 - "Inline Edit & Title Cells"
Cohesion: 0.14
Nodes (8): ActionsCell, ActionsCellProps, InlineEditOpts, makeInlineEdit(), TitleCell, TitleCellProps, renderTagChip(), stringToColor()

### Community 37 - "Gantt & Scroll State"
Cohesion: 0.15
Nodes (18): getScrollPosition(), getScrollTop(), getViewState(), handleClearFilter(), handleFilterMutation(), handleSavedViewDelete(), handleSavedViewSave(), handleSavedViewSelect() (+10 more)

### Community 38 - "Legacy Bundle Functions"
Cohesion: 0.19
Nodes (18): an(), ar(), cn(), fn(), In(), jn(), kn(), ks (+10 more)

### Community 39 - "Legacy Bundle Functions"
Cohesion: 0.17
Nodes (18): ee(), fa(), go(), ha(), he(), ia(), ie(), ko() (+10 more)

### Community 40 - "Project Header Row"
Cohesion: 0.21
Nodes (4): PrimaryRowProps, ProjectHeaderProps, FilterState, isFilterActive()

### Community 41 - "Version Compatibility"
Cohesion: 0.12
Nodes (15): 1.0.0, 1.1.0, 1.1.1, 1.2.0, 1.3.0, 1.3.1, 1.3.2, 1.4.0 (+7 more)

### Community 42 - "Legacy Bundle Functions"
Cohesion: 0.22
Nodes (15): createProject(), deleteFolderRecursive(), deleteProject(), deleteTaskFiles(), doSaveProject(), ensureFolder(), insertAttachments(), markSelfWrite() (+7 more)

### Community 43 - "Assignees & Avatars"
Cohesion: 0.20
Nodes (3): displayName(), initialsFor(), parseLinktext()

### Community 44 - "Archive & Template Ops"
Cohesion: 0.30
Nodes (8): archiveTask(), projectTaskFolder(), unarchiveTask(), findTaskById(), ensureFolder(), isAlreadyExistsError(), moveTaskAttachmentFolder(), normalizePath()

### Community 45 - "Time Tracking Cells"
Cohesion: 0.23
Nodes (4): TimeCell, TimeCellProps, renderTimeChip(), TimeChip

### Community 48 - "Plugin Manifest"
Cohesion: 0.22
Nodes (8): author, authorUrl, description, id, isDesktopOnly, minAppVersion, name, version

### Community 49 - "Legacy Bundle Functions"
Cohesion: 0.33
Nodes (7): ce(), lo(), nt(), ro(), ue(), we(), xo()

### Community 50 - "Build Styles Script"
Cohesion: 0.29
Nodes (5): entry, outFile, prod, root, stylesDir

### Community 53 - "Formatter Config"
Cohesion: 0.33
Nodes (5): jsxSingleQuote, printWidth, semi, singleQuote, trailingComma

### Community 55 - "Project Loading & Self-heal"
Cohesion: 0.50
Nodes (5): loadProject, loadTaskFile, loadTasksFromFolder, metadataCache fast path, Orphan self-healing re-parenting

## Knowledge Gaps
- **268 isolated node(s):** `printWidth`, `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma` (+263 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `renderTaskRow()` connect `Table Rows & Select` to `Legacy Bundle Functions`, `Legacy Bundle Functions`, `Notifier & Gantt Drag`, `Legacy Bundle Functions`, `Kanban Columns & Status Cells`, `Kanban Cards & Pickers`, `Settings & Defaults`, `Table View & Bulk Ops`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Why does `archiveTask()` connect `Archive & Template Ops` to `Legacy Bundle Functions`, `Task Persistence Ops`, `Task Storage & Attachments`, `Legacy Bundle Functions`, `Legacy Bundle Functions`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `safeAsync()` connect `Table View & Bulk Ops` to `Notifier & Gantt Drag`, `Inline Edit & Title Cells`, `Project Modal & Members`, `View Switching & Types`, `Project Header Row`, `Chip Button Component`, `Kanban Columns & Status Cells`, `Table Rows & Select`, `Styleguide & Docs`, `Task Modal & Subtasks`, `Task Types & Tests`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Task` (e.g. with `Project Manager README` and `makeTask()`) actually correct?**
  _`Task` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 10 inferred relationships involving `e` (e.g. with `uo()` and `ga()`) actually correct?**
  _`e` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `render()` (e.g. with `ap()` and `ef()`) actually correct?**
  _`render()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `printWidth`, `semi`, `singleQuote` to the rest of the system?**
  _276 weakly-connected nodes found - possible documentation gaps or missing edges._