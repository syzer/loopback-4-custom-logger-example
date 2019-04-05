import { DefaultCrudRepository } from '@loopback/repository';
import { Note } from '../models';
import { DsDataSource } from '../datasources';
export declare class NoteRepository extends DefaultCrudRepository<Note, typeof Note.prototype.id> {
    constructor(dataSource: DsDataSource);
}
