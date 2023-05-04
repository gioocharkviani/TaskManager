import React from 'react'

const Input = (props) => {
  return (
    <div className='flex w-full flex-col relative my-[15px]'>
      <label for='' className='absolute top-[-12px] bg-[white] px-[5px] left-[15px] text-[14px]'>{props?.label}</label>
      <input type={props?.type}  onChange={props?.onChange} placeholder={props?.placeholder} className='w-[auto] border-[1px] px-[10px] focus:outline-[#5390EB] border-[gray] py-[10px] rounded-[3px]'/>
    </div>
  )
}

export default Input
