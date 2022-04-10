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
}

export const Row = ({ todo: { id, task, isCompleted, tag }, handleDeleteTodo, handleFilterTodo}: TodoProps) => {
  return (
    <div>
        <input 
            type="checkbox"
            checked={isCompleted}
            onChange={() => null}
        />
        <p>{task}</p>
        <div>
            <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
                X
            </button>
            <button onClick={() => handleFilterTodo(tag)}>
                {tag}
            </button>
        </div>
    </div>
  )
}
