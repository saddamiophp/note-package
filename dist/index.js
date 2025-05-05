"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = createNote;
function createNote(title, content) {
    return {
        title,
        content,
        createdAt: new Date()
    };
}
