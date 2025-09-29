import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props;

  const indexed = todos.map((t, i) => ({ todo: t, index: i }));
  const notDone = indexed.filter(x => !x.todo.done);
  const done = indexed.filter(x => x.todo.done);

  return (
    <>
      {notDone.length > 0 && (
      <>
        <div className='todoHeader'>TO DO</div>
        <div className="line"></div>
        <ul className='main'>
            {notDone.map(({ todo, index }) => (
            <TodoCard
                {...props}
                key={todo.id ?? `todo-${index}`}
                index={index}
            >
                <p>{todo.text}</p>
            </TodoCard>
            ))}
        </ul>
      </>
    )}

      {done.length > 0 && (
        <>
            <div className='todoHeader'>DONE</div>
            <div className="line"></div>
            <ul className='main'>
                {done.map(({ todo, index }) => (
                <TodoCard
                    {...props}
                    key={todo.id ?? `todo${index}`}
                    index={index}
                >
                    <p className='strike' >{todo.text}</p>
                </TodoCard>
                ))}
            </ul>
        </>
      )}
    </>
  );
}