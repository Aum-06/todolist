import React from 'react'
import Todolist from './components/Todolist'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-stone-900 flex justify-center items-center'>
      <Todolist />
    </div>
  )
}

export default App