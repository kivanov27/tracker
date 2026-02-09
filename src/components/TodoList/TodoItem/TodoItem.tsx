import type { TodoTask } from "@/types";
import "./TodoItem.css";

interface TodoItemProps {
    todoItem: TodoTask;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
    return (
        <div className="todo-item">
            <input type="checkbox" className="todo-item-checkbox" />
            <span>{todoItem.task}</span>
        </div>
    );
};

export default TodoItem;
