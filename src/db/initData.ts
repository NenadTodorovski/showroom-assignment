// import { returnMongooseModel } from './utils'
import mongoose from 'mongoose'
import { Board, Showroom } from '../graphql/mongoose'

export async function initData() {

    mongoose.connect(`mongodb://127.0.0.1:27017/projectShowroomDb`, { useNewUrlParser: true, useUnifiedTopology: true })

    // const Board = returnMongooseModel('Board')
    // const Showroom = returnMongooseModel('Showroom')

    //clear db of showrooms on initial startup
    await Showroom.deleteMany({})
    //create single initial showroom and save it
    let initialShowrooom = await Showroom.create(
        {
            title: 'First seeded showroom title',
            boards: [],
        }
    )
    let showroomRefId = initialShowrooom._id

    //clear db of boards on initial startup
    await Board.deleteMany({})
    //create boards, save them to add to the showroom and give them showroomRefId
    let initialBoards: typeof Board[] = await Board.create([
        { title: 'First board', img: 'https://media.gettyimages.com/photos/portrait-of-group-of-kittens-picture-id83454804?s=2048x2048', showroomRefId },
        { title: 'Second board', img: 'https://media.gettyimages.com/photos/bengal-kittens-in-a-basket-picture-id184928901?s=2048x2048', showroomRefId },
        { title: 'Third board', img: 'https://media.gettyimages.com/photos/scottish-fold-cat-picture-id1250677517?s=2048x2048', showroomRefId },
    ])

    //assign boards to initial showroom
    await Showroom.findOneAndUpdate({ _id: showroomRefId }, { boards: initialBoards }, { useFindAndModify: false })
}
