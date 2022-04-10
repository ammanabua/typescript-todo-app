import React, { ChangeEvent, FormEvent } from 'react'

export type AddTodoProps = {
    task: string
    handleSubmitTodo: (e:FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({ task, handleChange, handleSubmitTodo }: AddTodoProps) => {
  return(
    <form onSubmit={handleSubmitTodo} className="">
        <button type="submit" aria-label="Add a task">
        +
        </button>
        <input type="text" name="task" value={task} onChange={handleChange} />
        <button name="tag" value="Green">
            Green
        </button>
        <button name="tag" value="Purple">
            Purple
        </button>
        <div>
            <input type="radio" value="Green" name="tag" /> Green
            <input type="radio" value="Purple" name="tag" /> Purple
        </div>
    </form>
  )
}
