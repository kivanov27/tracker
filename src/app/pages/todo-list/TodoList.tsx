import { useEffect, useState } from "react";
import "./TodoList.css";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import TodoItem from "@/app/components/TodoItem/TodoItem";
import TodoItemForm from "@/app/components/TodoItemForm/TodoItemForm";
import type { NewTodoTask, TodoTask } from "@/lib/types";

const TodoList = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    const [formOpen, setFormOpen] = useState<boolean>(false);

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

    const addTask = async (newTodoTask: NewTodoTask) => {
        const response = await fetch('/api/todo-list', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodoTask),
        });
        if (!response.ok) {
            console.error(response.text);
        }
        const newTask = await response.json();
        setTasks(prev => [...prev, newTask]);
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                {tasks.map((task: TodoTask) =>
                    <TodoItem key={task.id} todoItem={task} completeTask={completeTask} />
                )}
                <button onClick={() => setFormOpen(!formOpen)}>Add task</button>
                <TodoItemForm isOpen={formOpen} setOpen={setFormOpen} addTask={addTask} />
            </div>
        </div>
    );
};

export default TodoList;
