import React, { useState, ChangeEvent, FormEvent, } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoProps, Todo } from '../@types/todo'
import useLocalStorage from '../hooks/use-local-storage';


export const TodoContext = React.createContext<TodoProps | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', 
    [
        {
            id: "1",
            task: "Buy something from the market",
            tag: "Green",
            isCompleted: false
        },
        {
            id: "2",
            task: "Email Dr. Ebuka",
            tag: "Green",
            isCompleted: false
        },
        {
            id: "3",
            task: "Complete todo app list",
            tag: "Purple",
            isCompleted: false
        },
        {
            id: "4",
            task: "Go to school",
            tag: "Purple",
            isCompleted: false
        },
    ]);


    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]; 
        setTodos(updatedTodos);
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
        <TodoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo, handleCheckTodo, handleFilterTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
