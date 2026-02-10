import "./TodoList.css";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import TodoItem from "@/app/components/TodoItem/TodoItem";
import type { TodoTask } from "@/lib/types";
import { useEffect, useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("http://localhost:3000/api/todo-list");
            const todoItems = await response.json();
            setTasks(todoItems);
        };

        fetchTasks();
    }, []);

    const completeTask = async (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
        await fetch(`/api/todo-list/${id}`, {
            method: "DELETE",
        });
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                {tasks.map((task: TodoTask) =>
                    <TodoItem key={task.id} todoItem={task} completeTask={completeTask} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
