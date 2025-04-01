import React from 'react'

export const Filter = ({ children }) => {
    return (
        <button className='border border-gray-400 cursor-pointer rounded-md px-4 py-2 transition-discrete hover:bg-gray-200'> {children}  </button>
    )
}
