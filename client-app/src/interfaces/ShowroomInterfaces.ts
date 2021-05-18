import { IBoard } from './BoardInterfaces'

export interface IShowroom {
    _id: string;
    title: string;
    boards: IBoard[];
}

export interface IShowroomData {
    showroomMany: IShowroom[];
}

export interface IShowroomVars { }
