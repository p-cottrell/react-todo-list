import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";


function App() {
    const [todos, setTodos] = useState([])
    const  [todoValue, setTodoValue] = useState('')

    function persistData(newList) {
      localStorage.setItem("todos", JSON.stringify({todos: newList}))
    }

    function handleAddTodo(newTodo) {
      const obj = {text: newTodo, done: false}
      const newTodoList = [...todos, obj]
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDeleteTodo(index) {
       const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
       })
       persistData(newTodoList)
       setTodos(newTodoList)
    }

    function handleStrikeTodo(index) {
      const newTodoList = todos.map((todo, todoIndex) => {
        if (todoIndex === index) {
          return {...todo, done: !todo.done}
        } else {
          return {...todo, todoIndex}
        }
      })
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleEditTodo(index) {
      const valueToBeEdited = todos[index].text
       setTodoValue(valueToBeEdited)
       handleDeleteTodo(index)
    }

    useEffect(() => {
      if (!localStorage) {
        return
      }

      let localTodos = localStorage.getItem("todos")

      if (!localTodos) {
        return
      }

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    }, [])

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleStrikeTodo={handleStrikeTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  )
}

export default App
