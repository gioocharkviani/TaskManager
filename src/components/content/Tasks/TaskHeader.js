import React from 'react'
import Search from '../../../assets/search.svg'

const TaskHeader = () => {
  return (
<div className='w-full flex justify-between items-center bg-white  rounded-[5px] p-[10px]'>

<div className='flex gap-[5px]'>
  <button className='text-white bg-[#0eafe1] p-[5px] rounded-[5px] hover:bg-[#109ac4]'>Space : Space name</button>
  <button className='text-white bg-[#0eafe1] p-[5px] rounded-[5px] hover:bg-[#109ac4]'>Project: project name</button>
</div>

<div className='flex gap-[10px]'>

  <div className='flex items-center'>
    <form className='border-[1px] border-[gray] px-[10px] py-[10px] rounded-[5px] flex justify-between'>
      <input placeholder='Search Task'  type='text' className=' outline-none pr-2 '/>
      <button><img src={Search} /></button>
    </form>
  </div>

  <button className='px-[15px] py-[10px] bg-[#5c5cff] rounded-[5px] text-[white] hover:bg-[#7c7cff]'>New Task</button>
  <button className='px-[15px] py-[10px] bg-[#0eafe1] rounded-[5px] text-[white] hover:bg-[#109ac4]'>filter</button>  
</div>

</div>
  )
}

export default TaskHeader