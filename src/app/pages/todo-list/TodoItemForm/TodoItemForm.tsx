import { useState } from "react";
import "./TodoItemForm.css";
import type { NewTodoTask } from "@/lib/types";

interface TodoItemFormProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addTask: (newTodoTask: NewTodoTask) => void;
}

const TodoItemForm = ({ isOpen, setOpen, addTask }: TodoItemFormProps) => {
    const [task, setTask] = useState<string>('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newTodoTask: NewTodoTask = { task };
        addTask(newTodoTask);
        setTask('');
        setOpen(false);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className={`${isOpen ? "visible" : "hidden"}`}
        >
            <div className="input-group">
                <label>Task</label>
                <input type="text" onChange={({ target }) => setTask(target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoItemForm;
