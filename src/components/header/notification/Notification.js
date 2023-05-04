import React from 'react'
import bell from '../../../assets/bell.svg'

const Notification = (props) => {
  return (
    <div className='cursor-pointer' onClick={props.active}>
    <div className='w-[48px] h-[48px] relative rounded-[50%] bg-[#e6efff] flex justify-center items-center' >
        <img src={bell} />
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#5390EB]  absolute top-0 right-[0]'></div>
    </div>
    </div>
  )
}

export default Notification
