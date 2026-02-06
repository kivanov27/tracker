import type { TodoTask } from "@/types";
import "./TodoItem.css";

interface TodoItemProps {
    todoTask: TodoTask;
}

const TodoItem = ({ todoTask }: TodoItemProps) => {
    return (
        <div className="todo-item" key={todoTask.id}>
            <input type="checkbox" className="todo-item-checkbox" />
            <span>{todoTask.task}</span>
        </div>
    );
};

export default TodoItem;
