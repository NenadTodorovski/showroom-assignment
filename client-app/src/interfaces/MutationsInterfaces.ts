export interface CreateOneUserActivityInput {
    timestamp: string;
    page: string;
    entity_id: string;
    event_type: string;
    data: { board_id: string };
}

export interface CreateManyUserActivityInput extends CreateOneUserActivityInput { }
