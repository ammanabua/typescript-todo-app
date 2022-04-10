import React, { useState } from 'react'
import { Row } from './Row';

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

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    const handleFilterTodo = (tag: string) => {
        const updatedTodos = todos.filter((todo) => todo.tag === tag)
        setTodos(updatedTodos)
    }
  return (
    <section>
        {todos.map((todo) => (
            <Row key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleFilterTodo={handleFilterTodo} />
        ))}
    </section>
  )
}

