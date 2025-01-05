import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"

/** TodoList: renders the NewTodoForm and the list of Todo components */

function TodoList() {
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)); // filter so that every existing box is including except for the one clicked for removal
    }

    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(({ id, task }) => <Todo id={id} task={task} key={id} removeTodo={removeTodo} />)}
            </ul>
        </div>
    )
}

export default TodoList