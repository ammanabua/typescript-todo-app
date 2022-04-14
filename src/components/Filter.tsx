import React from 'react'
import { AddTodo } from './AddTodo'
import { FilteredTodos } from "./FilteredTodos"
import { Top } from './Top'

export const Filter = () => {
    
  return (
    <section className='flex w-full justify-center items-center bg-white h-screen'>
        <div className='flex-col w-[500px]'>
            <Top />
            <FilteredTodos />
            <AddTodo />
        </div>
    </section>
  )
}
