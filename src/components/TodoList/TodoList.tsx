import "./TodoList.css"
import Sidebar from "../Sidebar/Sidebar";
import TodoItem from "./TodoItem/TodoItem";
import type { TodoTask } from "@/types";

const response = await fetch("http://localhost:3000/api/todo");
const todoItems = await response.json();

const TodoList = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                {todoItems.map((item: TodoTask) =>
                    <TodoItem todoItem={item} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
