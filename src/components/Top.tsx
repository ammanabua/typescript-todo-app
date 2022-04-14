import React from 'react';
import { Todo, TodoProps } from '../@types/todo';
import { TodoContext } from "../context/todoContext"
import { Link, useLocation, useParams } from 'react-router-dom';



export const Top: React.FC = () => {

    const location = useLocation()

    console.log(location.pathname)

  const { todos, filtered, handleFilterTodo } = React.useContext(TodoContext) as TodoProps;
    
    const todosLength = todos.length;
    const hasTodos = todos.length > 0

    const filteredLength = filtered.length;
    
    let newDate = new Date();

    return (
      <section>
        <div className='w-[500px] bg-orange h-20 p-6 rounded-t-[40px] w-full'>
            <p className='text-center text-white text-xl font-medium'>{`Today, ${newDate.toDateString()}`}</p>
        </div>
        {!hasTodos && (
            <p className='m-5 text-xl text-[#c00] uppercase'>Please add todo!</p>
        )}
        {hasTodos && (
            <div className='flex w-full justify-between p-4 text-xl bg-grey font-medium'>
                <div>
                    <p className='text-orange'>{location.pathname === "/filter" ? `Filtering and showing ${filteredLength} tasks` : `Showing ${todosLength} tasks`}</p>
                </div>
                <div>
                    <Link to="/filter">
                    <button onClick={() => handleFilterTodo("Green")} className='h-8 w-8 mr-3 rounded-xl bg-green outline-none border-none'></button>
                    </Link>
                    <Link to="/filter">
                    <button onClick={() => handleFilterTodo("Purple")} className='h-8 w-8 mr-3 rounded-xl bg-purple outline-none border-none'></button>
                    </Link>
                </div>
            </div>
        )}
      </section>
        // <ul>
        //     Filter
        //     <li onClick={() => currentFilter('Green')}>All</li>
        //     <li onClick={() => currentFilter('Purple')}>Completed</li>
        // </ul>
    )
}