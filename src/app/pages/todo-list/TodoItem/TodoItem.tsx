import type { TodoTask } from "@/lib/types";
import "./TodoItem.css";
import { useState } from "react";

interface TodoItemProps {
    todoItem: TodoTask;
    completeTask: (id: number) => void;
}

const TodoItem = ({ todoItem, completeTask }: TodoItemProps) => {
    const [isRemoving, setIsRemoving] = useState<boolean>(false);

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsRemoving(true);
        }
    };

    const handleAnimationEnd = () => {
        if (isRemoving) {
            completeTask(todoItem.id);
        }
    };

    return (
        <div 
            className={`todo-item ${isRemoving ? 'removing' : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <input 
                type="checkbox" 
                onChange={handleCheck}
                disabled={isRemoving}
                className="todo-item-checkbox" 
            />
            <span className="todo-item-text">{todoItem.task}</span>
        </div>
    );
};

export default TodoItem;
