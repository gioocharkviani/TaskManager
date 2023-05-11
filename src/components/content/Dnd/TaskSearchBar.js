import React from 'react'
import Input from '../../UI/Input'
import Search from '../../../assets/search.svg'

const TaskSearchBar = () => {
  return (
    <div>
                <form className='rounded-[3px] flex gap-[5px] py-[5px] px-[10px] border-[1px] border-[gray]'>
                    <input type='text' placeholder='Search Task'  className='outline-none text-[13px]'/>
                    <button><img src={Search} /></button>
                </form>
    </div>
  )
}

export default TaskSearchBar
