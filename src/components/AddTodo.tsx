import React, { ChangeEvent, FormEvent} from 'react'
import { TodoProps } from '../@types/todo'
import { TodoContext } from '../context/todoContext'
import { v4 as uuidv4 } from 'uuid'



export const AddTodo: React.FC = () => {


    const { handleAddTodo } = React.useContext(TodoContext) as TodoProps;

    const [task, setTask] = React.useState("");
    const [tag, setTag] = React.useState("");

    const handleChange = (e: ChangeEvent) => {
      const { value } = e.target as HTMLInputElement
      setTask(value)
    }

  const handleSubmitTodo = (e: FormEvent) => {
      e.preventDefault()

      const todo = {
          id: uuidv4(),
          task: task,
          tag: tag,
          isCompleted: false,
      }
      task && handleAddTodo(todo);
      setTask("")      
  }

  const handleAddTag = (e: FormEvent) => {
      const { value } = e.target as HTMLInputElement
      setTag(value)
  }

  return(
    <form onSubmit={handleSubmitTodo} className="w-full flex justify-between items-center p-8 border-t-2 border-border-grey rounded-b-[40px]">
      <div className='flex'>
          <button className='text-3xl text-[#CC634F]' type="submit" aria-label="Add a task">
          +
          </button>
          <input value={task} className='border-none ml-4 text-xl w-full' type="text" name="task" onChange={handleChange} placeholder="Add a task" />
      </div>
      <div className='flex justify-center items-center'>
          <div className='flex mr-3'>
          <input className='peer invisible h-0 w-0' id="green" type="radio" value="Green" name="tag" onChange={handleAddTag} />
          <label className='peer-checked:outline peer-checked:outline-4 peer-checked:outline-tag-outline flex h-8 w-8 rounded-xl bg-green cursor-pointer' htmlFor="green"></label>
          </div>
          <div className='flex'>
          <input className='peer invisible h-0 w-0' type="radio" value="Purple" name="tag" id="purple" onChange={handleAddTag} />
          <label className='peer-checked:outline peer-checked:outline-4 peer-checked:outline-tag-outline flex h-8 w-8 rounded-xl bg-purple cursor-pointer' htmlFor="purple"></label>
          </div>
      </div>
    </form>
  )
}
