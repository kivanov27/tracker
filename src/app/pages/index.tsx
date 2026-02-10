import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TodoList from "./todo-list/TodoList";
import HabitTracker from "./habit-tracker/HabitTracker";
import GymRoutine from "./gym-routine/GymRoutine";
import GymRecords from "./gym-records/GymRecords";

const elem = document.getElementById("root")!;
const app = (
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/todo-list" element={<TodoList />} />
                <Route path="/habit-tracker" element={<HabitTracker />} />
                <Route path="/gym-routine" element={<GymRoutine />} />
                <Route path="/gym-records" element={<GymRecords />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

if (import.meta.hot) {
    // With hot module reloading, `import.meta.hot.data` is persisted.
    const root = (import.meta.hot.data.root ??= createRoot(elem));
    root.render(app);
} else {
    // The hot module reloading API is not available in production.
    createRoot(elem).render(app);
}
