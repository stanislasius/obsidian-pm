import type { Task, TaskPriority, StatusConfig, PriorityConfig, CustomFieldDef } from '../../types'
import type { TableState } from './TableRenderer'
import { statusSortOrder } from '../../utils'

export function compareTask(
  a: Task,
  b: Task,
  state: TableState,
  statuses: StatusConfig[] = [],
  priorities: PriorityConfig[] = [],
  customFields: CustomFieldDef[] = []
): number {
  const dir = state.sortDir === 'asc' ? 1 : -1
  switch (state.sortKey) {
    case 'title':
      return dir * a.title.localeCompare(b.title)
    case 'status':
      return dir * (statusSortOrder(a.status, statuses) - statusSortOrder(b.status, statuses))
    case 'priority':
      return dir * (priorityOrder(a.priority, priorities) - priorityOrder(b.priority, priorities))
    case 'due':
      return dir * (a.due || 'zzz').localeCompare(b.due || 'zzz')
    case 'progress':
      return dir * (a.progress - b.progress)
    default: {
      const cf = customFields.find((f) => f.id === state.sortKey)
      if (cf) return dir * compareCustomValues(a.customFields[cf.id], b.customFields[cf.id], cf)
      return 0
    }
  }
}

function priorityOrder(p: TaskPriority, priorities: PriorityConfig[]): number {
  const idx = priorities.findIndex((cfg) => cfg.id === p)
  return idx >= 0 ? idx : 999
}

function compareCustomValues(aVal: unknown, bVal: unknown, field: CustomFieldDef): number {
  switch (field.type) {
    case 'number':
      return (Number(aVal) || 0) - (Number(bVal) || 0)
    case 'date':
      return String(aVal || 'zzz').localeCompare(String(bVal || 'zzz'))
    case 'checkbox':
      return (aVal ? 1 : 0) - (bVal ? 1 : 0)
    case 'multiselect': {
      const aFirst = Array.isArray(aVal) ? String(aVal[0] ?? '') : ''
      const bFirst = Array.isArray(bVal) ? String(bVal[0] ?? '') : ''
      return aFirst.localeCompare(bFirst)
    }
    default:
      return String(aVal ?? '').localeCompare(String(bVal ?? ''))
  }
}
