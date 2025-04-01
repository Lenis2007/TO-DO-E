import React from 'react'
import { Button } from './Button'

export const Form = () => {
    return (
        <form className='w-full flex flex-col gap-4'>
            <input type="text" 
            placeholder='Title' 
            className='border border-gray-500 rounded-md p-2 w-full mb-4' />
            <textarea className='border border-gray-500 rounded-md p-2 w-full mb-4'
            placeholder='Description'></textarea>
            <Button className='hover:bg-blue-600 bg-blue-500'> Add Task </Button>
        </form>
    )
}
