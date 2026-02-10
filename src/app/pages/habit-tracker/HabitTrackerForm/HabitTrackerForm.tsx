import { useState } from "react";
import "./HabitTrackerForm.css";
import type { NewHabit } from "@/lib/types";

interface HabitTrackerFormProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addHabit: (newTodoTask: NewHabit) => void;
}

const HabitTrackerForm = ({ isOpen, setOpen, addHabit }: HabitTrackerFormProps) => {
    const [name, setName] = useState<string>('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newHabit: NewHabit = { name };
        addHabit(newHabit);
        setName('');
        setOpen(false);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className={`${isOpen ? "visible" : "hidden"}`}
        >
            <div className="input-group">
                <label>Name</label>
                <input type="text" onChange={({ target }) => setName(target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default HabitTrackerForm;
