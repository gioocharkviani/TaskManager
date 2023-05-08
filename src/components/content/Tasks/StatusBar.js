import React from 'react'

import Plus from '../../../assets/Plus.svg'
import Threedots from  '../../../assets/threedots.svg'

const StatusBar = (props) => {
  return (
    <div onDragEnter={props.onDragEnter} className='flex gap-[10px] min-w-[280px] flex-col h-auto bg-[#d8e3f6] rounded-[10px] p-[15px]'>

    <div style={{background: props.color}} className={`flex justify-between gap-[15px] px-[8px] py-[8px] rounded-[3px] text-[white]`}>
    <div className='flex gap-2'>
    <h2 className='text-[15px] font-bold'>{props.title}</h2>
    <div>14</div>
    </div>
    <div className='flex gap-2'>

      <button className='border-[1px] border-dashed border-[#e2e2e2] w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
        <img src={Plus} alt='+' />
      </button>

      <button className='border-[1px] border-dashed border-[#e2e2e2] w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
        <img src={Threedots} alt='...' />
      </button>
    </div>
    </div>

    {props.children}

  </div>
  )
}

export default StatusBar