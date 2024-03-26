import { TodoItem } from "../class/TodoItem";

export default function Todo({todos}: {todos: TodoItem}) {
  return (
    <div>          
        <li>
            <label>
              <input type="checkbox" readOnly checked={todos.completed}/>
              {todos.name}
            </label>
        </li>          
    </div>
  );
}