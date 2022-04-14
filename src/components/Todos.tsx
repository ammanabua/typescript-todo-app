
import React from 'react'
import { AddTodo } from './AddTodo';
import { Row } from './Row';
import { Todo, TodoProps } from '../@types/todo';
import { TodoContext } from "../context/todoContext"
import { Top } from './Top';


export const Todos = () => {

    const { todos, handleFilterTodo, handleCheckTodo, handleDeleteTodo } = React.useContext(TodoContext) as TodoProps
    

  return (
    <section className='w-[500px] xs:w-1/4 m-8 max-w-2xl flex flex-col items-center'>
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

