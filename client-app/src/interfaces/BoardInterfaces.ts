export interface IBoard {
    _id: string;
    title: string;
    img: string;
    showroomRefId: string;
}

export interface IBoardData {
    boardMany: IBoard[];
}

export interface IBoardVars { }
