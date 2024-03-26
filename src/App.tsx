import './App.css'
import TodoList from './components/TodoList'
import { useState } from 'react'
import { TodoItem } from "./class/TodoItem";

function App() {

  const first = new TodoItem(1, 'todo 1', true)
  const second = new TodoItem(2, 'todo 2', true)

  const [todos] = useState([first, second])

  return (
    <>
        <input type="text" name="" id="" />
        <button>Add todo</button>
        <button>Clear Complete</button>
        <div>0 left to do</div>
        <TodoList todos={todos}/>
    </>
  )
}

export default App
