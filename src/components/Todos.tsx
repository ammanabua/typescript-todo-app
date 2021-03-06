
import React from 'react'
import { AddTodo } from './AddTodo';
import { Row } from './Row';
import { Todo, TodoProps } from '../@types/todo';
import { TodoContext } from "../context/todoContext"
import { Top } from './Top';


export const Todos = () => {

    const { todos, handleCheckTodo, handleDeleteTodo } = React.useContext(TodoContext) as TodoProps
    

  return (
    <section className='w-[300px] md:w-[400px] lg:w-[500px] m-8 flex flex-col items-center justify-center'>
        <Top />
        {todos.map((todo: Todo) => (
            <Row key={todo.id} 
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo} />
        ))}
        <AddTodo />
    </section>
  )
}

