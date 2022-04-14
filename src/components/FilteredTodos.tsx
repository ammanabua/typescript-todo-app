import React from 'react'
import { TodoContext } from '../context/todoContext';
import { TodoProps, Todo } from '../@types/todo';
import { Row } from './Row';



export const FilteredTodos = () => {

  const { filtered, handleCheckTodo, handleDeleteTodo } = React.useContext(TodoContext) as TodoProps;

  return (
    <div>
      {filtered.map((todo: Todo) => (
            <Row key={todo.id} 
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo} />
        ))}
    </div>
  )
}
