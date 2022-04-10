
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodo } from './AddTodo';
import { Row } from './Row';
import { v4 as uuidv4 } from 'uuid'


const data = [
    {
        id: "1",
        task: "Buy something from the market",
        tag: "Blue",
        isCompleted: false
    },
    {
        id: "2",
        task: "Email Dr. Ebuka",
        tag: "Red",
        isCompleted: false
    },
    {
        id: "3",
        task: "Complete todo app list",
        tag: "Blue",
        isCompleted: false
    },
]

type Todo = {
    id: string
    task: string
    tag: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("");
    const [tag, setTag] = useState("");

    const todosLength = todos.length;
    const hasTodos = todos.length > 0;
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length
    

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos)
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
  return (
    <section>
        {hasTodos && (
            <p>{`Showing ${todosLength} tasks`}</p>
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
            handleChange={handleChange}
            handleSubmitTodo={handleSubmitTodo} />
    </section>
  )
}

