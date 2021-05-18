import { composeMongoose } from 'graphql-compose-mongoose'
import { schemaComposer } from 'graphql-compose'

import { Board, Showroom, UserActivity } from './mongoose'

export const BoardTC = composeMongoose(Board)
export const ShowroomTC = composeMongoose(Showroom)
export const UserActivityTC = composeMongoose(UserActivity)

schemaComposer.Query.addFields({
    boardById: BoardTC.mongooseResolvers.findById(),
    // boardByIds: BoardTC.mongooseResolvers.findByIds(),
    boardByFilter: BoardTC.mongooseResolvers.findOne(),
    boardMany: BoardTC.mongooseResolvers.findMany(),
    // boardDataLoader: BoardTC.mongooseResolvers.dataLoader(),
    // boardDataLoaderMany: BoardTC.mongooseResolvers.dataLoaderMany(),
    // boardByIdLean: BoardTC.mongooseResolvers.findById({ lean: true }),
    // boardByIdsLean: BoardTC.mongooseResolvers.findByIds({ lean: true }),
    // boardOneLean: BoardTC.mongooseResolvers.findOne({ lean: true }),
    // boardManyLean: BoardTC.mongooseResolvers.findMany({ lean: true }),
    // boardDataLoaderLean: BoardTC.mongooseResolvers.dataLoader({ lean: true }),
    // boardDataLoaderManyLean: BoardTC.mongooseResolvers.dataLoaderMany({ lean: true }),
    boardCount: BoardTC.mongooseResolvers.count(),
    // boardConnection: BoardTC.mongooseResolvers.connection(),
    boardPagination: BoardTC.mongooseResolvers.pagination(),

    showroomById: ShowroomTC.mongooseResolvers.findById(),
    showroomByFilter: ShowroomTC.mongooseResolvers.findOne(),
    showroomMany: ShowroomTC.mongooseResolvers.findMany(),
    showroomCount: ShowroomTC.mongooseResolvers.count(),
    showroomPagination: ShowroomTC.mongooseResolvers.pagination(),


    userActivityById: UserActivityTC.mongooseResolvers.findById(),
    userActivitydByFilter: UserActivityTC.mongooseResolvers.findOne(),
    userActivityMany: UserActivityTC.mongooseResolvers.findMany(),
    userActivityCount: UserActivityTC.mongooseResolvers.count(),
    userActivityPagination: UserActivityTC.mongooseResolvers.pagination(),

})
schemaComposer.Mutation.addFields({
    boardCreateOne: BoardTC.mongooseResolvers.createOne(),
    boardCreateMany: BoardTC.mongooseResolvers.createMany(),
    boardUpdateById: BoardTC.mongooseResolvers.updateById(),
    boardUpdateOne: BoardTC.mongooseResolvers.updateOne(),
    boardUpdateMany: BoardTC.mongooseResolvers.updateMany(),
    boardRemoveById: BoardTC.mongooseResolvers.removeById(),
    boardRemoveOne: BoardTC.mongooseResolvers.removeOne(),
    boardRemoveMany: BoardTC.mongooseResolvers.removeMany(),




    userActivityCreateOne: UserActivityTC.mongooseResolvers.createOne(),
    userActivityCreateMany: UserActivityTC.mongooseResolvers.createMany(),

})

// schemaComposer.Query.addFields({
//     showroomById: ShowroomTC.mongooseResolvers.findById(),
//     showroomByIds: ShowroomTC.mongooseResolvers.findByIds(),
//     showroomOne: ShowroomTC.mongooseResolvers.findOne(),
//     showroomMany: ShowroomTC.mongooseResolvers.findMany(),
//     showroomDataLoader: ShowroomTC.mongooseResolvers.dataLoader(),
//     showroomDataLoaderMany: ShowroomTC.mongooseResolvers.dataLoaderMany(),
//     showroomByIdLean: ShowroomTC.mongooseResolvers.findById({ lean: true }),
//     showroomByIdsLean: ShowroomTC.mongooseResolvers.findByIds({ lean: true }),
//     showroomOneLean: ShowroomTC.mongooseResolvers.findOne({ lean: true }),
//     showroomManyLean: ShowroomTC.mongooseResolvers.findMany({ lean: true }),
//     showroomDataLoaderLean: ShowroomTC.mongooseResolvers.dataLoader({ lean: true }),
//     showroomDataLoaderManyLean: ShowroomTC.mongooseResolvers.dataLoaderMany({ lean: true }),
//     showroomCount: ShowroomTC.mongooseResolvers.count(),
//     showroomConnection: ShowroomTC.mongooseResolvers.connection(),
//     showroomPagination: ShowroomTC.mongooseResolvers.pagination(),
// });
// schemaComposer.Mutation.addFields({
//     showroomCreateOne: ShowroomTC.mongooseResolvers.createOne(),
//     showroomCreateMany: ShowroomTC.mongooseResolvers.createMany(),
//     showroomUpdateById: ShowroomTC.mongooseResolvers.updateById(),
//     showroomUpdateOne: ShowroomTC.mongooseResolvers.updateOne(),
//     showroomUpdateMany: ShowroomTC.mongooseResolvers.updateMany(),
//     showroomRemoveById: ShowroomTC.mongooseResolvers.removeById(),
//     showroomRemoveOne: ShowroomTC.mongooseResolvers.removeOne(),
//     showroomRemoveMany: ShowroomTC.mongooseResolvers.removeMany(),
// });

// schemaComposer.Query.addFields({
//     showroomById: UserActivityTC.mongooseResolvers.findById(),
//     showroomByIds: UserActivityTC.mongooseResolvers.findByIds(),
//     showroomOne: UserActivityTC.mongooseResolvers.findOne(),
//     showroomMany: UserActivityTC.mongooseResolvers.findMany(),
//     showroomDataLoader: UserActivityTC.mongooseResolvers.dataLoader(),
//     showroomDataLoaderMany: UserActivityTC.mongooseResolvers.dataLoaderMany(),
//     showroomByIdLean: UserActivityTC.mongooseResolvers.findById({ lean: true }),
//     showroomByIdsLean: UserActivityTC.mongooseResolvers.findByIds({ lean: true }),
//     showroomOneLean: UserActivityTC.mongooseResolvers.findOne({ lean: true }),
//     showroomManyLean: UserActivityTC.mongooseResolvers.findMany({ lean: true }),
//     showroomDataLoaderLean: UserActivityTC.mongooseResolvers.dataLoader({ lean: true }),
//     showroomDataLoaderManyLean: UserActivityTC.mongooseResolvers.dataLoaderMany({ lean: true }),
//     showroomCount: UserActivityTC.mongooseResolvers.count(),
//     showroomConnection: UserActivityTC.mongooseResolvers.connection(),
//     showroomPagination: UserActivityTC.mongooseResolvers.pagination(),
// });
// schemaComposer.Mutation.addFields({
//     userActivityCreateOne: UserActivityTC.mongooseResolvers.createOne(),
//     userActivityCreateMany: UserActivityTC.mongooseResolvers.createMany(),
//     updateActivityById: UserActivityTC.mongooseResolvers.updateById(),
//     showroomUpdateOne: UserActivityTC.mongooseResolvers.updateOne(),
//     showroomUpdateMany: UserActivityTC.mongooseResolvers.updateMany(),
//     showroomRemoveById: UserActivityTC.mongooseResolvers.removeById(),
//     showroomRemoveOne: UserActivityTC.mongooseResolvers.removeOne(),
//     showroomRemoveMany: UserActivityTC.mongooseResolvers.removeMany(),
// });

export const schema = schemaComposer.buildSchema()
