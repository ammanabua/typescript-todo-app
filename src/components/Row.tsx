import React from 'react'

type Todo = {
    id: string,
    task: string,
    tag: string,
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
    handleDeleteTodo: (id: string) => void
    handleFilterTodo: (tag: string) => void
    handleCheckTodo: (id: string) => void
}

export const Row = ({ todo: { id, task, isCompleted, tag }, handleDeleteTodo, handleFilterTodo, handleCheckTodo}: TodoProps) => {
  return (
    <div
        className='
            flex w-full p-5 justify-between bg-white border-t-2 border-border-grey align-middle'>
        
        <div className='flex items-center'>
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
            className='w-1/6 flex justify-between items-center'>
            <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
                X
            </button>
            {tag === "Green" ? 
                <button onClick={() => handleFilterTodo(tag)} className='h-[18px] w-[18px] rounded-[6.7px] mr-3 rounded-xl bg-green outline-none border-none'>
            </button>
            : 
            <button onClick={() => handleFilterTodo(tag)} className='h-[18px] w-[18px] rounded-[6.7px] mr-3 rounded-xl bg-purple outline-none border-none'>
            </button>}
        </div>
    </div>
  )
}
