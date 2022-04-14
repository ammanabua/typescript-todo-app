import React, { useEffect, } from 'react'
import { TodoProps, Todo } from '../@types/todo'
import useLocalStorage from '../hooks/use-local-storage';


export const TodoContext = React.createContext<TodoProps | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [todos, setTodos] = useLocalStorage<Todo[]>('todos',[]);

    
    const [filtered, setFiltered] = React.useState(todos)
    
    useEffect(() => {
        setFiltered(todos);
    }, [todos])

    console.log(filtered)


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

    

    

    return (
        <TodoContext.Provider value={{ todos, filtered, handleAddTodo, handleDeleteTodo, handleCheckTodo, handleFilterTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
