import React, { useContext } from 'react'
import { TaskContext } from '../Context/Context'

export const Filter = ({ children }) => {
    const {setFilter} = useContext(TaskContext)

    return (
        <button onClick={() => setFilter(children)} className='border border-gray-400 cursor-pointer rounded-md px-4 py-2 transition-discrete hover:bg-gray-200'> {children}  </button>
    )
}
