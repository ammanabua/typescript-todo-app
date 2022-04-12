
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodo } from './AddTodo';
import { Row } from './Row';
import { v4 as uuidv4 } from 'uuid'
import { Todo, TodoProps } from '../@types/todo';
import { TodoContext } from "../context/todoContext"


// const data = [
//     {
//         id: "1",
//         task: "Buy something from the market",
//         tag: "Green",
//         isCompleted: false
//     },
//     {
//         id: "2",
//         task: "Email Dr. Ebuka",
//         tag: "Green",
//         isCompleted: false
//     },
//     {
//         id: "3",
//         task: "Complete todo app list",
//         tag: "Purple",
//         isCompleted: false
//     },
//     {
//         id: "4",
//         task: "Go to school",
//         tag: "Purple",
//         isCompleted: false
//     },
// ]



export const Todos = () => {

    const { todos, handleFilterTodo, handleCheckTodo, handleDeleteTodo } = React.useContext(TodoContext) as TodoProps;
    
    const todosLength = todos.length;
    const hasTodos = todos.length > 0;
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

    let newDate = new Date();
    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear()
    

  return (
    <section className='w-[500px] xs:w-1/4 m-8 max-w-2xl flex flex-col items-center'>
        <div className='bg-orange h-20 p-6 rounded-t-[40px] w-full'>
            <p className='text-center text-white text-xl font-medium'>{`Today, ${day} ${month} ${date} ${year}`}</p>
        </div>
        {!hasTodos && (
            <p className='m-5 text-xl text-[#c00] uppercase'>Please add todo!</p>
        )}
        {hasTodos && (
            <div className='flex w-full justify-between p-4 text-xl bg-grey font-medium'>
                <div>
                    <p className='text-orange'>{`Showing ${todosLength} tasks`}</p>
                </div>
                <div>
                    <button onClick={() => handleFilterTodo("Green")} className='h-8 w-8 mr-3 rounded-xl bg-green outline-none border-none'></button>
                    <button onClick={() => handleFilterTodo("Purple")} className='h-8 w-8 mr-3 rounded-xl bg-purple outline-none border-none'></button>
                </div>
            </div>
        )}
        {todos.map((todo: Todo) => (
            <Row key={todo.id} 
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleFilterTodo={handleFilterTodo}
            handleDeleteTodo={handleDeleteTodo} />
        ))}
        <AddTodo />
    </section>
  )
}

