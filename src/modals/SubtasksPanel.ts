import { ButtonComponent } from 'obsidian'
import type PMPlugin from '../main'
import type { Project, StatusConfig, Task } from '../types'
import { makeTask } from '../types'
import { promptText } from '../ui/ModalFactory'
import { IconButton } from '../ui/primitives/IconButton'
import { isTerminalStatus, getCompleteStatusId, getDefaultStatusId } from '../utils'
import { recalculateProgress } from '../store/TaskTreeOps'

export function renderSubtasksPanel(
  container: HTMLElement,
  task: Task,
  plugin: PMPlugin,
  statuses: StatusConfig[],
  project?: Project,
  onSaveAsTemplate?: (name: string, subtaskTitles: string[]) => void | Promise<void>
): void {
  const subSection = container.createDiv('pm-modal-section')
  const subHeader = subSection.createDiv('pm-modal-section-header')
  const subList = subSection.createDiv('pm-modal-subtask-list')

  const renderAll = () => {
    subHeader.empty()
    subList.empty()

    const heading = subHeader.createEl('h4', { text: `Subtasks (${task.subtasks.length})`, cls: 'pm-modal-section-title' })
    const countEl = heading.createSpan({ cls: 'pm-subtasks-count' })
    const total = task.subtasks.length
    if (total > 0) {
      const done = task.subtasks.filter((s) => isTerminalStatus(s.status, statuses)).length
      countEl.setText(`${done}/${total}`)
    }

    new ButtonComponent(subHeader).setButtonText('+ add').onClick(() => {
      const newSub = makeTask({ title: 'New subtask', type: 'subtask' })
      task.subtasks.push(newSub)
      renderAll()
      window.setTimeout(() => {
        const rows = subList.querySelectorAll('.pm-subtask-title')
        const last = rows[rows.length - 1] as HTMLElement
        if (last) {
          last.focus()
          const range = activeDocument.createRange()
          range.selectNodeContents(last)
          const sel = activeWindow.getSelection()
          if (sel) {
            sel.removeAllRanges()
            sel.addRange(range)
          }
        }
      }, 50)
    })

    if (task.subtasks.length > 0 && onSaveAsTemplate) {
      new ButtonComponent(subHeader).setButtonText('+ save as template').onClick(async () => {
        const name = await promptText(plugin.app, 'Template name', 'Template name')
        if (name) {
          await onSaveAsTemplate(name, task.subtasks.map((s) => s.title))
        }
      })
    }

    for (const sub of task.subtasks) {
      const row = subList.createDiv('pm-modal-subtask-row')

      const cb = row.createEl('input', { type: 'checkbox', cls: 'pm-subtask-checkbox' })
      cb.checked = isTerminalStatus(sub.status, statuses)
      cb.addEventListener('change', () => {
        sub.status = cb.checked ? getCompleteStatusId(statuses) : getDefaultStatusId(statuses)
        sub.progress = cb.checked ? 100 : 0
        if (plugin.settings.autoProgressMode === 'status') {
          task.progress = recalculateProgress(task, statuses)
        }
        renderAll()
      })

      const titleEl = row.createSpan({ text: sub.title, cls: 'pm-subtask-title' })
      titleEl.contentEditable = 'true'
      titleEl.addEventListener('blur', () => {
        sub.title = titleEl.textContent?.trim() ?? sub.title
      })

      new IconButton(row)
        .setIcon('x')
        .setTooltip('Remove subtask')
        .setRevealOnHover(true)
        .onClick(() => {
          task.subtasks = task.subtasks.filter((s) => s.id !== sub.id)
          renderAll()
        })
    }
  }

  renderAll()
}
