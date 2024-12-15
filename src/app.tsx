import { useState, useEffect } from 'preact/hooks'
import { styler } from './utils/styler'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  styler()

  return (
    <main class="bg-slate-50 p-15px h-mn-100dvh">
      <section class="">
        <div class="flex space-between items-center mb-1rem">
          <h1 class="fs-1.2rem fw-600 ls--0.015em">Todo List</h1>
        </div>
        <AddTodo addTodo={addTodo} />
        <div class="">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </section>
    </main>
  )
}
