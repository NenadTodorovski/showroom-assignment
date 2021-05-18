import mongoose from 'mongoose'

export const BoardSchema = new mongoose.Schema({
    title: String!,
    img: String!,
    description: String,
    showroomRefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Showroom' }!
})
export const Board = mongoose.model('Board', BoardSchema)

export const ShowroomSchema = new mongoose.Schema({
    title: String!,
    boards: { type: Array, ref: 'Board' }!,
})
export const Showroom = mongoose.model('Showroom', ShowroomSchema)

export const UserActivitySchema = new mongoose.Schema({
    timestamp: String!,
    page: String!,
    entity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Showroom' }!,
    event_type: String!,
    data: { board_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' } }!,
})
export const UserActivity = mongoose.model('UserActivity', UserActivitySchema)
