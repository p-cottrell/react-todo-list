import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props

  return (
    <ul className='main' >
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props } key={todoIndex} index = {todoIndex}>
                    <p style={ {textDecoration: todo.done ? "line-through" : "none"} }>
                        {todo.text}
                    </p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
