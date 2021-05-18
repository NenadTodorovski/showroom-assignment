// import React, { useState } from 'react'
import './App.css'
import {
  // gql, 
  // useMutation, 
  useQuery
} from "@apollo/client"

import { Layout } from './containers/Layout'
import { NavBar } from './components/navigation/NavBar'
import { SideBar } from './components/navigation/SideBar'
import { Showroom } from './containers/Showroom'
import { Board } from './components/UI/Board'

import {
  IBoard,
  // IBoardData, 
  // IBoardVars 
} from './interfaces/BoardInterfaces'
import {
  // IShowroom, 
  IShowroomData,
  IShowroomVars
} from './interfaces/ShowroomInterfaces'
// import { 
//   CreateOneUserActivityInput, 
//   CreateManyUserActivityInput 
// } from './interfaces/MutationsInterfaces'

import {
  // GET_ALL_BOARDS, 
  GET_ALL_SHOWROOMS
} from './graphql/Queries'
// import {
//   CREATE_USER_ACTIVITY,
//   CREATE_USER_ACTIVITIES
// } from './graphql/Mutations'



const App = () => {
  const { loading, error, data } = useQuery<IShowroomData, IShowroomVars>(GET_ALL_SHOWROOMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout>
      <NavBar />
      <SideBar />
      <Showroom>
        {data!.showroomMany[0].boards.map((board: IBoard) => {
          return (
            <Board
              key={board._id}
              board={board}
              page={data!.showroomMany[0].title}
              entity_id={data!.showroomMany[0]._id}
            />
          )
        })}
      </Showroom>
    </Layout>
  )
}

export default App
