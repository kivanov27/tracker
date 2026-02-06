import "./TodoList.css"
import Sidebar from "../Sidebar/Sidebar";
import TodoItem from "./TodoItem/TodoItem";


const TodoList = () => {
    const todoTask = { id: '1', task: 'the task to be done' };

    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                <TodoItem todoTask={todoTask} />
            </div>
        </div>
    );
};

export default TodoList;
