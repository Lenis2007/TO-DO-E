import React from 'react'
import { Form } from './Components/Form'
import { Tasks } from './Components/Tasks'
import { Filters } from './Components/Filters'

export const App = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 bg-white shadow-md rounded-lg p-5 w-96'>
        <h2 className='text-black text-2xl font-bold'> To Do List </h2>
        <Form />
        <Filters />
      </div>
      <Tasks />
    </>
  )
}
