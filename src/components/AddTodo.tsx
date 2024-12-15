import { useState } from 'preact/hooks'
import { RiAddLine } from '@remixicon/react'
import { styler } from '../utils/styler'
interface AddTodoProps {
  addTodo: (text: string) => void
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  styler()

  return (
    <>
      <form onSubmit={handleSubmit} class="flex items-center gap-12px">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            const target = e.target as HTMLInputElement // Cast `e.target`
            setText(target.value)
          }}
          placeholder="Add a new task..."
          class="h-40px p-12px fs-0.875rem [flex-grow]-1 bw-2px bs-solid bc-[rgb({slate-100})] br-8px fw-500 ls--0.015em focus:[outline]-none focus:bc-[rgb({slate-800})] tr-time-150ms"
        />
        <button type="submit" class="bg-slate-950 box-40px bdr-none br-8px text-slate-100 center">
          <RiAddLine size="22" />
        </button>
      </form>
    </>
  )
}
