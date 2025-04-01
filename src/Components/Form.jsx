import { Button } from './Button'
import { useContext, useState } from 'react'
import { TaskContext } from '../Context/Context'

export const Form = () => {

    const { tasks, setTasks } = useContext(TaskContext);
    const [task, setTask] = useState({ title: "", description: "" });

    const addTask = (e) => {
        e.preventDefault();

        const currentTask = {
            id: Date.now(),
            title: task.title,
            description: task.description,
            completed: false,
        };

        setTasks([...tasks, currentTask]);
        setTask({ title: "", description: "" });
    };

    return (
        <form onSubmit={addTask} className='w-full flex flex-col gap-4'>
            <input type="text"
                placeholder='Title'
                className='border border-gray-500 rounded-md p-2 w-full mb-4'
                required
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })} />
            <textarea className='border border-gray-500 rounded-md p-2 w-full mb-4'
                placeholder='Description'
                required
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
            <Button className='hover:bg-blue-600 bg-blue-500'> Add Task </Button>
        </form>
    )
}
