import React from 'react'
import { Todos } from "../components/Todos"


export const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-white'>
        <Todos />
    </div>
  )
}
