import { Count, Filter, Where } from '@loopback/repository';
import { Note } from '../models';
import { NoteRepository } from '../repositories';
export declare class NoteController {
    noteRepository: NoteRepository;
    constructor(noteRepository: NoteRepository);
    create(note: Note): Promise<Note>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Note[]>;
    updateAll(note: Note, where?: Where): Promise<Count>;
    findById(id: number): Promise<Note>;
    updateById(id: number, note: Note): Promise<void>;
    replaceById(id: number, note: Note): Promise<void>;
    deleteById(id: number): Promise<void>;
}
