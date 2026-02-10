import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/todo-list">To-do list</Link>
            <Link to="/habit-tracker">Habit tracker</Link>
            <Link to="/gym-routine">Gym routine</Link>
            <Link to="/gym-records">Gym records</Link>
        </div>
    );
};

export default Sidebar;
