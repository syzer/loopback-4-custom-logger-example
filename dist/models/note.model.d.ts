import { Entity } from '@loopback/repository';
export declare class Note extends Entity {
    id?: number;
    title: string;
    content?: string;
    constructor(data?: Partial<Note>);
}
