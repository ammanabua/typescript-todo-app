import React from 'react'

type Todo = {
    id: string,
    task: string,
    tag: string,
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
}

const Row = ({ todo: { task, isCompleted, tag }}: TodoProps) => {
  return (
    <div>
        <p>{task}</p>
        <div>
            <button aria-label="Delete a todo" onClick={() => null}>
                X
            </button>
            <input 
                type="checkbox"
                checked={isCompleted}
                onChange={() => null}
            />
        </div>
    </div>
  )
}

export default Row