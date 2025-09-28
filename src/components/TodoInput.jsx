export default function TodoInput(props) {
    const { handleAddTodo, todoValue, setTodoValue } = props

    addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        if (todoValue !== '') {
            handleAddTodo(todoValue)
            setTodoValue('')
        } else {
            return
        }
    }
    });

    return (
        <header>
            <input
                value={todoValue}
                onChange={ (e) => {
                    setTodoValue(e.target.value)
                }}
                placeholder="Enter task..."
            />
            <button onClick = { () => {
                if (todoValue !== '') {
                    handleAddTodo(todoValue)
                    setTodoValue('')
                } else {
                    return
                }
            } }>Add</button>
        </header>
    )
}