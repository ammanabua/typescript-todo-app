import React from 'react'
import { Todo } from '../@types/todo';


type Props = {
    todo: Todo;
    handleCheckTodo: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}


export const Row: React.FC<Props> = ({ todo: { id, task, isCompleted, tag }, handleDeleteTodo, handleCheckTodo}) => {
  return (
    <div
        className='
            flex w-full p-5 justify-between bg-white border-t-2 border-border-grey align-middle cursor-pointer' onClick={() => handleCheckTodo(id)}>
        
        <div className='flex items-center w-full'>
            <input
                className='bg-check-grey rounded-full border-2 border-blue focus:ring-0 h-8 w-8 transition duration-200 float-left cursor-pointer mr-2' 
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckTodo(id)}
            />
            <p
                className='
                ml-2 text-xl font-normal'>{task}</p>
        </div>
        <div
            className='w-1/6 flex justify-end items-center'>
            {tag === "Green" ? 
                <button className='h-[18px] w-[18px] rounded-[6.7px] mr-3 rounded-xl bg-green outline-none border-none'>
                </button>
                : 
                <button className='h-[18px] w-[18px] rounded-[6.7px] mr-3 rounded-xl bg-purple outline-none border-none'>
                </button>}
        </div>
    </div>
  )
}
