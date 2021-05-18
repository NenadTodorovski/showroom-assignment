import mongoose from 'mongoose'

export const returnMongooseModel = (modelName: string) => mongoose.model(modelName)
