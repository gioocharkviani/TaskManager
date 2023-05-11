import React from 'react'
import DndTasks from './DndTasks'
import Taskheader from './Taskheader'

const Tasks = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Taskheader />
      <DndTasks />
    </div>
  )
}

export default Tasks
