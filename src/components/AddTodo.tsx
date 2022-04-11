import React, { ChangeEvent, FormEvent } from 'react'
import { setTextRange } from 'typescript'

export type AddTodoProps = {
    task: string
    tag: string
    handleSubmitTodo: (e:FormEvent) => void
    handleChange: (e: ChangeEvent) => void
    handleAddTag: (e:ChangeEvent) => void
}

export const AddTodo = ({ task, tag, handleChange, handleAddTag, handleSubmitTodo }: AddTodoProps) => {
  return(
    <form onSubmit={handleSubmitTodo} className="w-full flex justify-between items-center p-8 border-t-2 border-border-grey rounded-b-[40px]">
        <div>
            <button className='' type="submit" aria-label="Add a task">
            +
            </button>
            <input className='border-none ml-4 text-xl' type="text" name="task" value={task} onChange={handleChange} placeholder="Add a task" />
        </div>
        <div>
            <input className='h-8 w-8 mr-3 rounded-xl bg-green outline-none checked:text-green focus:ring-0 border-none' type="radio" value="Green" name="tag" onChange={handleAddTag} />
            <input className='h-8 w-8 rounded-xl bg-purple outline-none checked:text-purple focus:ring-0 border-none' type="radio" value="Purple" name="tag" onChange={handleAddTag} />
        </div>
    </form>
  )
}
