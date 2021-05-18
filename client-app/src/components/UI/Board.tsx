import { useState } from 'react'
import { useMutation } from '@apollo/client'

import {
    // CREATE_USER_ACTIVITY,
    CREATE_USER_ACTIVITIES
} from '../../graphql/Mutations'

import { IBoard } from '../../interfaces/BoardInterfaces'
import {
    CreateOneUserActivityInput,
    CreateManyUserActivityInput
} from '../../interfaces/MutationsInterfaces'

export const Board = (props: { board: IBoard, page: string, entity_id: string }) => {
    const { board, page, entity_id } = props

    const [userActivityArray, setUserActivityArray] = useState<CreateOneUserActivityInput[] | CreateManyUserActivityInput[]>([])

    // const [createUserActivity] = useMutation(CREATE_USER_ACTIVITY)
    const [createUserActivities] = useMutation(CREATE_USER_ACTIVITIES)

    const onClickOrHoverBoardHandler = (e: React.MouseEvent, boardTitle: string) => {
        e.preventDefault()
        let timestamp = e.timeStamp.toString()
        let eventType = e.type
        let board = e.target! as HTMLElement
        let boardId: string = board.id

        let recordData: CreateManyUserActivityInput | CreateOneUserActivityInput = {
            timestamp,
            page,
            entity_id,
            event_type: `${eventType}_boardName:${boardTitle}`,
            data: { board_id: boardId }
        }

        setUserActivityArray((prev: CreateManyUserActivityInput[] | CreateOneUserActivityInput[]) => [...prev, recordData])

        // createUserActivity({ variables: { record: recordData } })
        //   .then((res: any) => {
        //     console.log(res)
        //   }).catch((err: any) => {
        //     console.log(err)
        //   })
    }

    const onMouseOutHandler = (e: React.MouseEvent) => {
        userActivityArray.length > 0 &&
            createUserActivities({ variables: { records: userActivityArray } })
                .then((res: any) => {
                    console.log(res)
                    setUserActivityArray([])
                }).catch((err: any) => {
                    console.log(err)
                })
    }

    return (
        <div style={{ padding: '16px auto 20px 12px', marginRight: '30px', color: '#474F58' }}>
            <p style={{ fontFamily: 'IBM Plex Serif Regular', fontSize: '52px', lineHeight: "67px" }} >{board.title}</p>
            <p style={{ fontFamily: 'IBM Plex Sans Regular', fontSize: '16px', lineHeight: '26px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit labore commodi reiciendis hic molestiae qui, corrupti dolor officia impedit pariatur quas? Repellat autem sunt qui perspiciatis. Aperiam repellendus autem dicta!</p>
            <img
                id={board._id}
                style={{ height: 'auto', width: '100%' }}
                src={board.img}
                alt='pics of cats'
                onClick={e => onClickOrHoverBoardHandler(e, board.title)}
                onMouseOver={e => onClickOrHoverBoardHandler(e, board.title)}
                onMouseOut={e => onMouseOutHandler(e)}
            />
        </div>

    )
}