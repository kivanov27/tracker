export interface TodoTask {
    id: number;
    task: string;
}

export type NewTodoTask = Omit<TodoTask, 'id'>;

export interface Habit {
    id: number;
    name: string;
    completed: Date[];
}

export interface NewHabit {
    name: string;
}
