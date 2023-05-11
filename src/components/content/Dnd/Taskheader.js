import React from 'react'
import TaskSearchBar from './TaskSearchBar'
import Button1 from '../../UI/button1'

const Taskheader = () => {
  return (
    <div className='bg-[#fff] p-[10px] rounded-[10px]'>
      
        <div className='flex justify-between'>
            <TaskSearchBar />
            <Button1 title='Create Task'/>
        </div>

    </div>
  )
}

export default Taskheader
