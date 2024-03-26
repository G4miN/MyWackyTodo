import { TodoItem } from "../class/TodoItem";
import Todo from "./Todo";

export default function TodoList({ todos }: { todos: TodoItem[] }) {
    return (
        <>
        {
            todos.map((item) => {
                return (
                    <Todo key={item.id} todos={item}/>            
                )
              })
        }
        </>
    );
}