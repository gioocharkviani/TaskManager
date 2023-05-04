import React from 'react'
import Plus from '../../assets/Plus.svg'

const AddNewBtn = (props) => {
  return (
    <div className='flex flex-col gap-2  w-[70px] right-[0] top-0   mb-[20px]'>
        <h2 className='text-[#5390EB] text-[15px] font-bold'>Add New</h2>
      <button onClick={props.AddNewBtn} className='w-[64px] h-[64px] rounded-[50%] border-[1px]  bg-[#5390EB] flex justify-center items-center'><img src={Plus} alt='Plus' /></button>
    </div>
  )
}

export default AddNewBtn
