import React from 'react'

import Flag from '../../../assets/flag.svg'
import PersonAdd from '../../../assets/person-add.svg'
import Clock from '../../../assets/clock.svg'


const TaskCard = (props) => {

  return (
    <div key={props.key} className={`${props.style}  flex flex-col gap-[5px] p-[10px] rounded-[5px]`} onDragEnter={props.onDragEnter} draggable onDragStart={props.onDragStart} >
            
      <header>
        <h2 className='text-[15px] font-bold'>{props.title}</h2>
      </header>

      <div className='border-[gray] pb-[10px] border-b-[1px] text-[13px]'>
      {props.desc}
      </div>

      <div className='flex justify-between items-center'>
      
      <div className='flex gap-[10px]'>
        <button className='bg-[#e8e8e8] hover:bg-[#d3d3d3] py-[2px] rounded-[2px] px-[5px]'>
          <img src={Flag} alt='' /></button>
        <button className='bg-[#e8e8e8] hover:bg-[#d3d3d3] py-[2px] rounded-[2px] px-[5px] flex gap-1 justify-center items-center'>
          <img src={Clock} alt='' /><span>{props.dedline}</span></button>
      </div>

      <div>
          <button className='w-[25px] h-[25px]  border-[1px] flex justify-center items-center border-[#cbcbcb] rounded-[50%]'>
            <img src={PersonAdd} />
            </button>
      </div>

    </div>

  </div>
  )
}

export default TaskCard
