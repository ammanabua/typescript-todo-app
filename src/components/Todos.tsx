
import React, { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useState } from 'react'
import { AddTodo } from './AddTodo';
import { Row } from './Row';
import { v4 as uuidv4 } from 'uuid'


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

type Todo = {
    id: string
    task: string
    tag: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState("");
    const [tag, setTag] = useState("");

    const todosLength = todos.length;
    const hasTodos = todos.length > 0;
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length
    

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        console.log(updatedTodos);
        setTask("")
    }

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
        task && handleAddTodo(todo)
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    const handleFilterTodo = (tag: string) => {
        const updatedTodos = todos.filter((todo) => todo.tag === tag)
        setTodos(updatedTodos)
    }

    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    const handleAddTag = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement
        setTag(value)
        console.log(value);
    }

  return (
    <section className='w-[500px] xs:w-1/4 m-8 max-w-2xl flex flex-col items-center'>
        <div className='bg-orange h-20 p-6 rounded-t-[40px] w-full'>
            <p className='text-center text-white text-xl font-medium'>Today, Fri Oct 08 2021</p>
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
                    <button onClick={() => handleFilterTodo(tag)} className='h-8 w-8 mr-3 rounded-xl bg-green outline-none border-none'></button>
                    <button onClick={() => handleFilterTodo(tag)} className='h-8 w-8 mr-3 rounded-xl bg-purple outline-none border-none'></button>
                </div>
            </div>
        )}
        {todos.map((todo) => (
            <Row key={todo.id} 
            todo={todo} 
            handleDeleteTodo={handleDeleteTodo} 
            handleFilterTodo={handleFilterTodo}
            handleCheckTodo={handleCheckTodo} />
        ))}
        <AddTodo 
            task={task}
            tag={tag}
            handleChange={handleChange}
            handleSubmitTodo={handleSubmitTodo}
            handleAddTag={handleAddTag} />
    </section>
  )
}

