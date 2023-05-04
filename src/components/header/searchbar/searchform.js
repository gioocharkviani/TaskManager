import React from 'react'
import SearchIcon from '../../../assets/search.svg'

const searchform = () => {
  return (
    <div className='bg-[#F9FAFC]  rounded-[100px] h-[48px] w-[70%] px-[10px]'>
      <form className='w-[full ] justify-between items-center flex h-full gap-[15px] '>
        <button><img src={SearchIcon} /></button>
        <input 
        type='text' placeholder='seach' className='w-full bg-inherit outline-0' ></input>
      </form>
    </div>
  )
}

export default searchform
