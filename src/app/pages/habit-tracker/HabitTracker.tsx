import { useEffect, useState } from "react";
import "./HabitTracker.css";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import HabitTrackerForm from "./HabitTrackerForm/HabitTrackerForm";
import type { Habit, NewHabit } from "@/lib/types";

const HabitTracker = () => {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [formOpen, setFormOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchHabits = async () => {
            const response = await fetch('/api/habit-tracker');
            const habits = await response.json();
            setHabits(habits);
        };

        fetchHabits();
    }, []);

    const addHabit = async (newHabit: NewHabit) => {
        const response = await fetch('/api/habit-tracker', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabit),
        });
        if (!response.ok) {
            console.error(response.text);
        }
        const addedHabit = await response.json();
        setHabits(prev => [...prev, addedHabit]);
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="habit-tracker">
                {habits.map(habit =>
                    <div key={habit.id}>{habit.name}</div>
                )}
                <button onClick={() => setFormOpen(!formOpen)}>{formOpen ? "Close form" : "Add habit"}</button>
                <HabitTrackerForm isOpen={formOpen} setOpen={setFormOpen} addHabit={addHabit} />
            </div>
        </div>
    );
};

export default HabitTracker;
