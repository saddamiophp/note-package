// src/index.ts
export interface Note {
    title: string;
    content: string;
    createdAt: Date;
  }
  
export function createNote(title: string, content: string): Note {
    return {
      title,
      content,
      createdAt: new Date()
    };
}
  
  