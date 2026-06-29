import type { CustomFieldDef } from '../../../types'
import { formatDateLong } from '../../../utils'
import { Chip } from '../../primitives/Chip'
import { makeInlineEdit } from './inlineEdit'

export interface CustomFieldCellProps {
  val: unknown
  field: CustomFieldDef
  onSave?: (newVal: string) => Promise<void>
}

export class CustomFieldCell {
  el: HTMLTableCellElement

  constructor(parentRow: HTMLElement, props: CustomFieldCellProps) {
    const { val, field, onSave } = props
    this.el = parentRow.createEl('td', { cls: 'pm-table-cell' })

    const display = this.format(val, field)
    const isEmpty = display === ''

    if (field.type === 'date' && onSave) {
      const startEdit = (el: HTMLElement): void => {
        makeInlineEdit({
          container: this.el,
          display: el,
          inputType: 'date',
          value: String(val ?? ''),
          onSave
        })
      }

      if (isEmpty) {
        const chip = new Chip(this.el)
          .setLabel('—')
          .setColor('var(--text-faint)')
          .onClick((e) => {
            e.stopPropagation()
            startEdit(chip.el)
          })
      } else {
        const chip = new Chip(this.el).setLabel(formatDateLong(String(val)))
        chip.onClick((e) => {
          e.stopPropagation()
          startEdit(chip.el)
        })
      }
      return
    }

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
