import React, { useState } from 'react'

export const CreateTask = () => {

    const [task, setTask] = useState({title: '', description: ''})
    /* const [title, setTitle] = useState('')
    const [description, setDescription] = useState('') */
    const [tasks, setTasks] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        const currentTask = {
            id: Date.now(),
            title: task.title,
            description: task.description,
            completed: false
        }

        setTasks([...tasks, currentTask])
        /* setTitle('')
        setDescription('') */
    }

    return (
        <div className='flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-5 w-150'>
            <h1 className='text-black text-[25px] mb-5 font-bold'> To-Do List </h1>

            <form className='w-full' onSubmit={addTask}>
                <input
                    className='border border-gray-500 rounded-md p-2 w-full mb-4'
                    type="text"
                    placeholder='Title'
                    onChange={event => setTask({...task, title: event.target.value})} />

                <textarea
                    className='border border-gray-500 rounded-md p-2 w-full mb-4'
                    name=""
                    id=""
                    placeholder='Description'
                    onChange={event => setTask({...task, description: event.target.value})} />

                <button
                    type='submit'
                    className='bg-blue-500 text-white font-semibold py-2 rounded w-full mb-4 cursor-pointer'>
                    Add Task </button>
            </form>

            <div className='flex justify-between w-full'>
                <button
                    className='border border-gray-500 rounded-md px-4 py-2 cursor-pointer'> All </button>

                <button
                    className='border border-gray-500 rounded-md px-4 py-2 cursor-pointer'> Pending </button>

                <button
                    className='border border-gray-500 rounded-md px-4 py-2 cursor-pointer'> Completed </button>
            </div>

            <ul className='mt-5 w-full'>
                {
                    tasks.map(itemTask => (
                        <li key={itemTask.id} className='mb-4 p-4 rounded shadow-sm flex justify-between items-center'>
                            <div>
                                <input type="checkbox" />
                                <h2 className='text-lg font-bold'> {itemTask.title} </h2>
                                <p> {itemTask.description} </p>
                                <button 
                                onClick={() => setTasks(tasks.filter(t => t.id !== itemTask.id))}
                                className='bg-red-400 text-white font-bold py-2 rounded'
                                > Delete </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// Reestructurar como se considere el manejo de componentes.
// Rama: feact-create-tasks EDWIN 
// Button filtros - Accion
// Filtros Botones
// Formulario Titulo e inputs
// Lista
// Cada tarea