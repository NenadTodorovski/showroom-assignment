import { returnMongooseModel } from '../db/utils'

export const resolvers = {
    Query: {
        allBoards: async () => await returnMongooseModel('Board').find({}),
        allShowrooms: async () => await returnMongooseModel('Showroom').find({}),
    }
}
