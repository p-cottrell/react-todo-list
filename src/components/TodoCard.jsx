import React from 'react'
import confetti from "canvas-confetti";


export default function TodoCard(props) {
    const {children, handleEditTodo, handleStrikeTodo, handleDeleteTodo, index} = props

    const onStrike = () => {
        handleStrikeTodo(index);
         confetti({
            drift: 2,
            particleCount: 70,
            angle: 50,
            spread: 55,
            origin: { x: 0 }
        });
        // and launch a few from the right edge
        confetti({
            drift: -2,
            particleCount: 70,
            angle: 130,
            spread: 55,
            origin: { x: 1 }
        });
    }

  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={onStrike}>
                <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button onClick={ () => {handleEditTodo(index)}}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={ () => {handleDeleteTodo(index)}}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
