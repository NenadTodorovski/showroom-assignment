import { gql } from '@apollo/client'

export const CREATE_USER_ACTIVITY = gql`
  mutation UserActivityCreateOne($record: CreateOneUserActivityInput!) {
    userActivityCreateOne(record: $record) {
      recordId
    }
  }
`

export const CREATE_USER_ACTIVITIES = gql`
  mutation UserActivityCreateMany($records: [CreateManyUserActivityInput!]!) {
    userActivityCreateMany(records: $records){
      createdCount
    }
  }
`
