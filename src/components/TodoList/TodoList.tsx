import "./TodoList.css"
import Sidebar from "../Sidebar/Sidebar";

const TodoList = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="todo">
                <p>todo list</p>
            </div>
        </div>
    );
};

export default TodoList;
