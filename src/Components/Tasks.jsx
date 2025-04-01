import React from 'react'
import { Task } from './Task'

export const Tasks = () => {
  return (
    <ul className='flex flex-col items-center justify-center gap-4 bg-white w-96'>
        <Task />
    </ul>
  )
}
