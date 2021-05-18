import { gql } from '@apollo/client'

export const GET_ALL_BOARDS = gql`
  query {
    boardMany {
      _id
      title
      img
      showroomRefId
    }
  }
`

export const GET_ALL_SHOWROOMS = gql`
  query { 
    showroomMany {
      _id
      title
      boards
    }
  }
`
