import { useContext } from 'react'
import { Button } from './Button'
import { TaskContext } from '../Context/Context'

export const Task = ({ task }) => {
    const { tasks, setTasks } = useContext(TaskContext)
    const completeTask = task.completed ? "line.through" : "";

    const handleCheck = (e) => {
        const updateTask = tasks.map(t => {
            if (t.id === task.id) {
                return { ...t, completed: e.target.checked }
            }
            return t;
        })
        setTasks(updateTask);
    }

    return (
        <li key={task.id} className="w-full flex flex-col gap-4 p-5 shadow-md">

            <div className="flex w-full gap-2 justify-start items-center">
                <label className="text-gray-600 black text-md capitalize break-words" htmlFor="complete">Complete</label>
                <input
                    checked={task.completed}
                    onChange={handleCheck}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                    type="checkbox" name="complete" />
            </div>
            <div className="flex flex-col w-full gap-1 ">
                <h2 className={"text-black text-xl font-medium capitalize break-words" + completeTask}> {task.title} </h2>
                <p className={"text-gray-600 black text-md capitalize break-words" + completeTask}> {task.description} </p>
            </div>
            <Button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} className="hover:bg-red-600 bg-red-500"> Delete </Button>
        </li>
    )
}
