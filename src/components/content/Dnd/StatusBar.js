import React from 'react'

import Plus from '../../../assets/Plus.svg'
import Threedots from  '../../../assets/threedots.svg'

const StatusBar = (props) => {
  return (
  

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

  )
}

export default StatusBar