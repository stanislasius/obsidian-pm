import type { CustomFieldDef } from '../../../types'
import { formatDateLong } from '../../../utils'

export class CustomFieldCell {
  el: HTMLTableCellElement

  constructor(parentRow: HTMLElement, val: unknown, field: CustomFieldDef) {
    this.el = parentRow.createEl('td', { cls: 'pm-table-cell' })
    const display = this.format(val, field)
    this.el.createSpan({ text: display || '—', cls: 'pm-cf-value' })
  }

  private format(val: unknown, field: CustomFieldDef): string {
    if (val === undefined || val === null) return ''
    if (field.type === 'date') return formatDateLong(String(val))
    if (typeof val === 'string') return val
    if (typeof val === 'number' || typeof val === 'boolean') return String(val)
    if (Array.isArray(val)) return val.map((v) => String(v)).join(', ')
    return ''
  }
}
