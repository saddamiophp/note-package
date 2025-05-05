export interface Note {
    title: string;
    content: string;
    createdAt: Date;
}
export declare function createNote(title: string, content: string): Note;
