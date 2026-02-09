export interface TodoTask {
    id: number;
    task: string;
}

export type NewTodoTask = Omit<TodoTask, 'id'>;
