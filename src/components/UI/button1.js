import React from 'react'

const Button1 = (props) => {
  return (
    <div>
      <button onClick={props?.onClick} className='px-[15px] py-[5px] hover:bg-[#688bbf] bg-[#5390EB] text-[16px] text-[#FFF] rounded-[4px]'>{props.title}</button>
    </div>
  )
}

export default Button1
