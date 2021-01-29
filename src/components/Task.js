import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete}) => {
    return (
        <div className = "task">
            <h3>{task.title}</h3> 
            <FaTimes style = { {
                color: 'red',
                cursor: 'pointer'
            }}
                onClick = {()=> onDelete(task.id)}
            />
            <p>{ task.description }</p>
        </div>
    )
}

export default Task
