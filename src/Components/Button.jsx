import React from 'react'

export const Button = ({ children, className, onClick = null }) => {
    return (
        <button 
        onClick={onClick}
        className={'text-white font-semibold py-2 rounded w-full cursor-pointer transition-discrete' + className}> {children} </button>
    )
}
