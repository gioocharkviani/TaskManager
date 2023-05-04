import React from 'react'

const Button2 = (props) => {
  return (
    <div>
      <button  onClick={props?.onClick} className='px-[15px] py-[5px] hover:bg-[#7e3939] bg-[#c33b3b] text-[16px] text-[#FFF] rounded-[4px]'>{props.title}</button>
    </div>
  )
}

export default Button2
