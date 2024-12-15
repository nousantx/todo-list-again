import { RiCheckLine, RiDeleteBin2Line } from '@remixicon/react'
import { styler } from '../utils/styler'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  styler()
  return (
    <div class="mt-1rem flex items-center space-between bg-slate-100 p-1rem br-8px">
      <div class="flex items-center gap-12px">
        <button
          onClick={() => toggleTodo(todo.id)}
          class={`box-22px br-999px center bw-2px bs-solid ${
            todo.completed ? 'bg-green-500 bc-transparent' : 'bc-[rgb({slate-300})]'
          }`}
        >
          {todo.completed && <RiCheckLine size="24" />}
        </button>
        <span
          class={`fs-1rem fw-500 ls--0.015em ${
            todo.completed ? '[text-decoration-line]-line-through text-slate-500' : 'text-slate-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        class="[background,bdr]-none center box-22px text-red-500 hover:text-red-700 tr-time-300ms"
      >
        <RiDeleteBin2Line size="20" />
      </button>
    </div>
  )
}
