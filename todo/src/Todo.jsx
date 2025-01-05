import React from "react";

/** Todo: displays a div with the task of the todo */
const Todo = ({ id, task, removeTodo }) => {
    return (
        <div>
            <li id={id}>{task}</li>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo