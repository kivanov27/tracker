import "./index.css";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Link to="/todo-list">To-do List</Link>
            <Link to="/habit-tracker">Habit Tracker</Link>
            <Link to="/gym-routine">Gym Routine</Link>
            <Link to="/gym-tracker">Gym Tracker</Link>
        </div>
    );
}

export default App;
