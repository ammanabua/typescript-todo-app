import React, { useState, ChangeEvent, FormEvent, useEffect, } from 'react'
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

    const [task, setTask] = React.useState("");
    const [tag, setTag] = React.useState("");
    const [filtered, setFiltered] = React.useState(todos)
    useEffect(() => {
        setFiltered(todos); 
    }, [todos])

    console.log(filtered)


    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]; 
        setTodos(updatedTodos);
        setTask("")
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    const handleFilterTodo = (tag: string) => {
        const updatedTodos = todos.filter((todo) => todo.tag === tag)
        setFiltered(updatedTodos)
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



    //ADD TODO PROPS

    

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

    const handleAddTag = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement
        setTag(value)
    }

    return (
        <TodoContext.Provider value={{ todos, filtered, handleAddTodo, handleDeleteTodo, handleCheckTodo, handleFilterTodo, handleChange, handleSubmitTodo, handleAddTag }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
