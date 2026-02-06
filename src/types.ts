export interface TodoTask {
    id: string;
    task: string;
}

export type NewTodoTask = Omit<TodoTask, 'id'>;
