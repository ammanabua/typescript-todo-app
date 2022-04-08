import React from 'react'
import Row from "./Row";

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

const Todos = () => {
  return (
    <section>
        {data.map((todo) => (
            <Row key={todo.id} todo={todo} />
        ))}
    </section>
  )
}

export default Todos