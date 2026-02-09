import "./todo-list.css"
import Sidebar from "../components/Sidebar/Sidebar";
import TodoItem from "../components/TodoItem/TodoItem";
import type { TodoTask } from "@/lib/types";
import { useState } from "react";

const response = await fetch("http://localhost:3000/api/todo");
const todoItems = await response.json();

const TodoList = () => {
    const [tasks, setTasks] = useState<TodoTask[]>(todoItems);

    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                {tasks.map((task: TodoTask) =>
                    <TodoItem key={task.id} todoItem={task} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
