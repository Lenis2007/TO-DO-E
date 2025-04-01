import { useContext } from 'react'
import { Task } from './Task'
import { TaskContext } from '../Context/Context'

export const Tasks = () => {
  const { tasks, filter } = useContext(TaskContext)
  const filterTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  })

  return (
    <ul className='flex flex-col items-center justify-center gap-4 bg-white w-96'>
      {filterTasks.map((task) => <Task task={task} />)}
    </ul>
  )
}
