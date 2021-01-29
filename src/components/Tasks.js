import React from 'react'

const Tasks = () => {
    const tasks = [ 
        {'id': 1, 'title': 'Title1' , 'description': 'Lorum Impsum'},
        {'id': 2, 'title': 'Title2' , 'description': 'Lorum Impsum'},
        {'id': 3, 'title': 'Title3' , 'description': 'Lorum Impsum'},
     ]
    return (
        <>
            { tasks.map(task=> (
                <h3 key= {task.id}>{task.title}</h3>
            ) ) }
        </>
    )
}

export default Tasks
