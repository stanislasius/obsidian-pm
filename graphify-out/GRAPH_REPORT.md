# Graph Report - .  (2026-07-27)

## Corpus Check
- 112 files · ~57,019 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1499 nodes · 4525 edges · 73 communities (59 shown, 14 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 539 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Import & Picker Modals|Import & Picker Modals]]
- [[_COMMUNITY_Minified Bundle|Minified Bundle]]
- [[_COMMUNITY_Utility Helpers|Utility Helpers]]
- [[_COMMUNITY_Status & Priority Cells|Status & Priority Cells]]
- [[_COMMUNITY_Gantt Drag & Headers|Gantt Drag & Headers]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Task & Project Modals|Task & Project Modals]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Task CRUD Operations|Task CRUD Operations]]
- [[_COMMUNITY_Select & Task Row Cells|Select & Task Row Cells]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Project File Operations|Project File Operations]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Project Store Tests|Project Store Tests]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Notifier & Time Tracking|Notifier & Time Tracking]]
- [[_COMMUNITY_Filters & Project View|Filters & Project View]]
- [[_COMMUNITY_Form Build & Hydration|Form Build & Hydration]]
- [[_COMMUNITY_View State Management|View State Management]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Plugin Lifecycle|Plugin Lifecycle]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Due Dates & Scheduling|Due Dates & Scheduling]]
- [[_COMMUNITY_Kanban Board|Kanban Board]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Minified Bundle (cont)|Minified Bundle (cont)]]
- [[_COMMUNITY_Dashboard View|Dashboard View]]
- [[_COMMUNITY_Documentation & Features|Documentation & Features]]
- [[_COMMUNITY_Import Modal UI Phases|Import Modal UI Phases]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Table View|Table View]]
- [[_COMMUNITY_Progress & Project Cards|Progress & Project Cards]]
- [[_COMMUNITY_Archive & Display|Archive & Display]]
- [[_COMMUNITY_Confirm & Duplicate Modal|Confirm & Duplicate Modal]]
- [[_COMMUNITY_Time & Kanban Cards|Time & Kanban Cards]]
- [[_COMMUNITY_Gantt Chart View|Gantt Chart View]]
- [[_COMMUNITY_Table Refresh & Keyboard|Table Refresh & Keyboard]]
- [[_COMMUNITY_Version History|Version History]]
- [[_COMMUNITY_Chip Component|Chip Component]]
- [[_COMMUNITY_Custom Field & Task Forms|Custom Field & Task Forms]]
- [[_COMMUNITY_Note Link Suggestions|Note Link Suggestions]]
- [[_COMMUNITY_Actions & Icon Buttons|Actions & Icon Buttons]]
- [[_COMMUNITY_Due Date & Title Inline Edit|Due Date & Title Inline Edit]]
- [[_COMMUNITY_Avatar Stack & Assignees|Avatar Stack & Assignees]]
- [[_COMMUNITY_Avatar Component|Avatar Component]]
- [[_COMMUNITY_Custom Field Cell|Custom Field Cell]]
- [[_COMMUNITY_Import & Orphan Remap|Import & Orphan Remap]]
- [[_COMMUNITY_Plugin Manifest|Plugin Manifest]]
- [[_COMMUNITY_Frontmatter & Stubs|Frontmatter & Stubs]]
- [[_COMMUNITY_Expand & Collapse Row|Expand & Collapse Row]]
- [[_COMMUNITY_Empty State|Empty State]]
- [[_COMMUNITY_Build Scripts|Build Scripts]]
- [[_COMMUNITY_Import Search Phase|Import Search Phase]]
- [[_COMMUNITY_Tag Picker Modal|Tag Picker Modal]]
- [[_COMMUNITY_Prettier Config|Prettier Config]]
- [[_COMMUNITY_Settings Tab|Settings Tab]]
- [[_COMMUNITY_Project Modal Editor|Project Modal Editor]]
- [[_COMMUNITY_Segmented Control|Segmented Control]]
- [[_COMMUNITY_View Switcher|View Switcher]]
- [[_COMMUNITY_CICD Workflows|CI/CD Workflows]]
- [[_COMMUNITY_Modal Factory & Design|Modal Factory & Design]]
- [[_COMMUNITY_Minified Bundle (small)|Minified Bundle (small)]]
- [[_COMMUNITY_Position & Render|Position & Render]]
- [[_COMMUNITY_Accept Hide Commands|Accept Hide Commands]]
- [[_COMMUNITY_Cache Invalidation|Cache Invalidation]]
- [[_COMMUNITY_Unload Stop Lifecycle|Unload Stop Lifecycle]]
- [[_COMMUNITY_Open Project|Open Project]]
- [[_COMMUNITY_TSDown Build Config|TSDown Build Config]]
- [[_COMMUNITY_PNPM Overrides|PNPM Overrides]]

## God Nodes (most connected - your core abstractions)
1. `Project` - 89 edges
2. `Task` - 81 edges
3. `ProjectStore` - 54 edges
4. `e` - 52 edges
5. `render()` - 51 edges
6. `flattenTasks()` - 37 edges
7. `t()` - 35 edges
8. `safeAsync()` - 33 edges
9. `constructor()` - 32 edges
10. `ProjectView` - 32 edges

## Surprising Connections (you probably didn't know these)
- `parseFrontmatter()` --calls--> `parseYaml()`  [INFERRED]
  src/store/YamlParser.ts → test/obsidian-stub.ts
- `archiveTask()` --calls--> `normalizePath()`  [INFERRED]
  src/store/ArchiveOps.ts → test/obsidian-stub.ts
- `unarchiveTask()` --calls--> `normalizePath()`  [INFERRED]
  src/store/ArchiveOps.ts → test/obsidian-stub.ts
- `moveTaskAttachmentFolder()` --calls--> `normalizePath()`  [INFERRED]
  src/store/vaultFs.ts → test/obsidian-stub.ts
- `ensureFolder()` --calls--> `normalizePath()`  [INFERRED]
  src/store/vaultFs.ts → test/obsidian-stub.ts

## Import Cycles
- 2-file cycle: `src/views/gantt/GanttRenderer.ts -> src/views/gantt/GanttTaskBarRenderer.ts -> src/views/gantt/GanttRenderer.ts`
- 3-file cycle: `src/main.ts -> src/views/DashboardView.ts -> src/views/ProjectListRenderer.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/ui/ModalFactory.ts -> src/modals/ProjectModal.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/KanbanView.ts -> src/main.ts`
- 3-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/TaskLabelRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/DashboardView.ts -> src/views/ProjectListRenderer.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttDragHandler.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttLinkHandler.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/ui/ModalFactory.ts -> src/modals/ProjectModal.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/KanbanView.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/KanbanView.ts -> src/ui/TaskContextMenu.ts -> src/main.ts`
- 4-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/table/TableView.ts -> src/views/table/TableRenderer.ts -> src/main.ts`
- 5-file cycle: `src/main.ts -> src/views/PMViewRouter.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttRenderer.ts -> src/main.ts`
- 5-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttRenderer.ts -> src/views/gantt/GanttDragHandler.ts -> src/main.ts`
- 5-file cycle: `src/main.ts -> src/views/ProjectView.ts -> src/views/gantt/GanttView.ts -> src/views/gantt/GanttRenderer.ts -> src/views/gantt/GanttLinkHandler.ts -> src/main.ts`

## Hyperedges (group relationships)
- **Three Core Views** — readme_table_view, readme_gantt_chart, readme_kanban_board [INFERRED 0.95]
- **Design Rationale Principles** — readme_plain_text_data, readme_yaml_frontmatter, readme_offline_first, readme_vault_collaboration [INFERRED 0.85]

## Communities (73 total, 14 thin omitted)

### Community 0 - "Import & Picker Modals"
Cohesion: 0.06
Nodes (57): LabelContext, FileItem, ProjectPickerModal, TaskPickerModal, TaskFormFieldsContext, migrateProjects(), DEFAULT_PRIORITIES, makeProject() (+49 more)

### Community 1 - "Minified Bundle"
Cohesion: 0.02
Nodes (113): al, As, au, bc, beginInlineSave(), bl, bo(), Bs (+105 more)

### Community 2 - "Utility Helpers"
Cohesion: 0.06
Nodes (63): attach(), bp(), buildCardData(), constructor(), cp(), df(), dp(), fileName() (+55 more)

### Community 3 - "Status & Priority Cells"
Cohesion: 0.06
Nodes (19): PriorityCell, PriorityCellProps, StatusCell, StatusCellProps, Pill, DUE_LABELS, FilterRow, FilterRowProps (+11 more)

### Community 4 - "Gantt Drag & Headers"
Cohesion: 0.13
Nodes (39): attachBarMove(), attachDragHandle(), DragState, makeDragState(), formatDateRange(), formatWeekLabel(), renderDayHeader(), renderMonthBands() (+31 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.04
Nodes (48): description, devDependencies, @2bad/axiom, @2bad/tsconfig, eslint, eslint-plugin-obsidianmd, lightningcss, npm-run-all2 (+40 more)

### Community 6 - "Task & Project Modals"
Cohesion: 0.10
Nodes (25): renderTaskLabel(), PROJECT_COLORS, PROJECT_ICONS, renderSubtasksPanel(), TaskModal, PrimaryRowProps, DEFAULT_SETTINGS, FilterState (+17 more)

### Community 7 - "Minified Bundle (cont)"
Cohesion: 0.08
Nodes (45): ah(), Am(), bm(), ch(), check(), dh(), eh(), fh() (+37 more)

### Community 8 - "Task CRUD Operations"
Cohesion: 0.14
Nodes (39): addTask(), ap(), bf(), bulkAddToArray(), createProject(), deleteTask(), deleteTaskFiles(), deleteTasks() (+31 more)

### Community 9 - "Select & Task Row Cells"
Cohesion: 0.11
Nodes (29): SelectCell, SelectCellProps, TaskRow, TaskRowProps, isTaskOverdue(), statusSortOrder(), applyTaskFilterFlat(), isFilterActive() (+21 more)

### Community 10 - "Minified Bundle (cont)"
Cohesion: 0.15
Nodes (34): aa(), ca(), da(), e, ea(), ee(), fa(), ga() (+26 more)

### Community 11 - "Minified Bundle (cont)"
Cohesion: 0.12
Nodes (33): a(), ad(), ae(), ai(), bi(), br(), ci(), di() (+25 more)

### Community 12 - "Project File Operations"
Cohesion: 0.09
Nodes (32): af(), assignCopyName(), cf(), clearDirty(), deleteFolderRecursive(), deleteProject(), doSaveProject(), ef() (+24 more)

### Community 13 - "Minified Bundle (cont)"
Cohesion: 0.17
Nodes (32): ba(), cr(), cs(), d(), dr(), f(), fr(), gr() (+24 more)

### Community 14 - "Project Store Tests"
Cohesion: 0.12
Nodes (13): addNamed(), newStore(), STATUSES, bump(), detachFromParent(), expectDefined(), FakeAppLike, FakeVault (+5 more)

### Community 15 - "Minified Bundle (cont)"
Cohesion: 0.17
Nodes (30): at(), bt(), dt(), en(), et(), hn(), ho(), ht() (+22 more)

### Community 16 - "Notifier & Time Tracking"
Cohesion: 0.13
Nodes (19): Notifier, renderTimeTrackingPanel(), today(), formatBadgeText(), cloneNode(), cloneTaskSubtree(), collectAllAssignees(), collectAllTags() (+11 more)

### Community 17 - "Filters & Project View"
Cohesion: 0.13
Nodes (3): makeDefaultFilter(), filter(), ProjectView

### Community 18 - "Form Build & Hydration"
Cohesion: 0.09
Nodes (26): applyCollapsedState(), buildForm(), cleanupStaleProjectFilters(), ensureInitialized(), getTasksForStatus(), hydrateDescriptions(), J(), loadProject() (+18 more)

### Community 19 - "View State Management"
Cohesion: 0.11
Nodes (25): destroy(), finish(), getLabelWidth(), getScrollTop(), getViewState(), handleClearFilter(), handleFilterMutation(), handleSavedViewDelete() (+17 more)

### Community 20 - "Minified Bundle (cont)"
Cohesion: 0.19
Nodes (23): b(), er(), fo(), ge(), he(), hu, it(), ku (+15 more)

### Community 21 - "Plugin Lifecycle"
Cohesion: 0.12
Nodes (3): PMPlugin, openProjectPicker(), PMViewRouter

### Community 22 - "Minified Bundle (cont)"
Cohesion: 0.14
Nodes (22): be(), bn(), ct(), eo(), fe(), ha(), ie(), io() (+14 more)

### Community 23 - "Due Dates & Scheduling"
Cohesion: 0.17
Nodes (18): DEFAULT_STATUSES, DueDateFilter, makeTask(), isTerminalStatus(), addDays(), computeSchedule(), daysBetween(), SchedulePatch (+10 more)

### Community 24 - "Kanban Board"
Cohesion: 0.15
Nodes (7): KanbanCardData, KanbanColumn, KanbanColumnProps, KanbanColumnStatus, buildTaskContextMenu(), KanbanView, SubView

### Community 25 - "Minified Bundle (cont)"
Cohesion: 0.18
Nodes (21): an(), ar(), cn(), dn(), fn(), In(), jn(), ks (+13 more)

### Community 26 - "Minified Bundle (cont)"
Cohesion: 0.16
Nodes (21): ao(), c(), ce(), de(), ft(), gn(), go(), gt() (+13 more)

### Community 27 - "Dashboard View"
Cohesion: 0.16
Nodes (8): openProjectModal(), DashboardView, countTasks(), openCreateProjectModal(), openProjectContextMenu(), ProjectListContext, renderProjectListContent(), renderProjectListToolbar()

### Community 28 - "Documentation & Features"
Cohesion: 0.14
Nodes (18): Changelog, Keep a Changelog Standard, Semantic Versioning, Custom Fields per Project, Custom Statuses and Priorities, Due Date Notifications, Gantt Chart View, Kanban Board View (+10 more)

### Community 30 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (17): compilerOptions, exactOptionalPropertyTypes, inlineSourceMap, inlineSources, isolatedModules, lib, module, moduleResolution (+9 more)

### Community 31 - "Table View"
Cohesion: 0.21
Nodes (4): safeAsync(), BulkAction, TableView, taskCount()

### Community 32 - "Progress & Project Cards"
Cohesion: 0.15
Nodes (5): ProgressCell, ProgressCellProps, ProjectCard, ProjectCardProps, ProgressBar

### Community 33 - "Archive & Display"
Cohesion: 0.13
Nodes (15): archiveTask(), display(), ff(), getDisplayText(), getVisibleTasks(), If(), lf(), pp() (+7 more)

### Community 34 - "Confirm & Duplicate Modal"
Cohesion: 0.14
Nodes (3): ConfirmModal, DuplicateSubtasksModal, TextPromptModal

### Community 35 - "Time & Kanban Cards"
Cohesion: 0.18
Nodes (6): TimeCell, TimeCellProps, KanbanCard, KanbanCardProps, TimeChip, formatDateShort()

### Community 36 - "Gantt Chart View"
Cohesion: 0.22
Nodes (3): GanttView, buildTimelineConfig(), flattenTasks()

### Community 37 - "Table Refresh & Keyboard"
Cohesion: 0.14
Nodes (14): Cm(), Dm(), doRefreshTable(), em(), handleKeyDown(), makeTableContext(), Mm(), mp() (+6 more)

### Community 38 - "Version History"
Cohesion: 0.14
Nodes (13): 1.0.0, 1.1.0, 1.1.1, 1.2.0, 1.3.0, 1.3.1, 1.3.2, 1.4.0 (+5 more)

### Community 40 - "Custom Field & Task Forms"
Cohesion: 0.29
Nodes (9): renderCustomFieldInput(), renderTaskFormFields(), Recurrence, TaskType, stringifyCustomValue(), ChipListOpts, renderChipList(), renderProgressSlider() (+1 more)

### Community 42 - "Actions & Icon Buttons"
Cohesion: 0.20
Nodes (3): ActionsCell, ActionsCellProps, IconButton

### Community 43 - "Due Date & Title Inline Edit"
Cohesion: 0.24
Nodes (6): DueDateCellProps, InlineEditOpts, makeInlineEdit(), TitleCell, TitleCellProps, ChipVariant

### Community 45 - "Avatar Component"
Cohesion: 0.29
Nodes (5): Avatar, displayName(), initialsFor(), stringToColor(), parseLinktext()

### Community 46 - "Custom Field Cell"
Cohesion: 0.36
Nodes (5): CustomFieldCell, CustomFieldCellProps, DueDateCell, CustomFieldDef, formatDateLong()

### Community 47 - "Import & Orphan Remap"
Cohesion: 0.28
Nodes (9): importNotes(), jp, loadAllProjects(), pickProjectThenCreateTask(), remapOrphanTasks(), setOnImportComplete(), setProject(), showNotice() (+1 more)

### Community 48 - "Plugin Manifest"
Cohesion: 0.22
Nodes (8): author, authorUrl, description, id, isDesktopOnly, minAppVersion, name, version

### Community 49 - "Frontmatter & Stubs"
Cohesion: 0.28
Nodes (6): splitFrontmatter(), Notice, parseYaml(), TAbstractFile, TFile, TFolder

### Community 50 - "Expand & Collapse Row"
Cohesion: 0.29
Nodes (4): ExpandCell, ExpandCellProps, CollapseToggle, CollapseToggleProps

### Community 52 - "Build Scripts"
Cohesion: 0.29
Nodes (5): entry, outFile, prod, root, stylesDir

### Community 53 - "Import Search Phase"
Cohesion: 0.40
Nodes (6): handleSearch(), handleSelectAll(), renderFileList(), renderPhase1(), updateCounter(), updateNextButton()

### Community 55 - "Prettier Config"
Cohesion: 0.33
Nodes (5): jsxSingleQuote, printWidth, semi, singleQuote, trailingComma

### Community 58 - "Segmented Control"
Cohesion: 0.40
Nodes (3): SegmentedControl, SegmentedControlProps, SegmentedOption

### Community 59 - "View Switcher"
Cohesion: 0.40
Nodes (3): ViewSwitcher, ViewSwitcherOption, ViewSwitcherProps

### Community 60 - "CI/CD Workflows"
Cohesion: 0.50
Nodes (5): Build Workflow, Bump Version Workflow, CodeQL Analysis Workflow, Release Workflow, Test Workflow

### Community 61 - "Modal Factory & Design"
Cohesion: 0.67
Nodes (3): ModalFactory, Pull Request Template, Quiet Architect Design System

### Community 62 - "Minified Bundle (small)"
Cohesion: 0.67
Nodes (3): od(), wo(), ws()

### Community 63 - "Position & Render"
Cohesion: 0.67
Nodes (3): position(), renderItems(), show()

## Knowledge Gaps
- **226 isolated node(s):** `printWidth`, `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma` (+221 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `fn()` connect `Minified Bundle (cont)` to `Minified Bundle`, `Gantt Chart View`, `Minified Bundle (cont)`, `Project Store Tests`, `Minified Bundle (cont)`, `Minified Bundle (cont)`, `Minified Bundle (cont)`?**
  _High betweenness centrality (0.410) - this node is a cross-community bridge._
- **Why does `GanttView` connect `Gantt Chart View` to `Kanban Board`, `Gantt Drag & Headers`, `Task & Project Modals`?**
  _High betweenness centrality (0.315) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `e` (e.g. with `uo()` and `ga()`) actually correct?**
  _`e` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `render()` (e.g. with `ap()` and `ef()`) actually correct?**
  _`render()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `printWidth`, `semi`, `singleQuote` to the rest of the system?**
  _227 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Import & Picker Modals` be split into smaller, more focused modules?**
  _Cohesion score 0.0551967116852613 - nodes in this community are weakly interconnected._
- **Should `Minified Bundle` be split into smaller, more focused modules?**
  _Cohesion score 0.015384615384615385 - nodes in this community are weakly interconnected._