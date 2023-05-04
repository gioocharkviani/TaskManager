import React from 'react'

import PersonAdd from '../../../assets/person-add.svg'
import Pencill from '../../../assets/pensil.svg'

const SpaceCard = (props) => {

  const spaceHandler = () =>{
    console.log(props.spacename);
  }


  return (
    <div  className='p-[10px] bg-[white] relative hover:bg-[#e6e6e6]  z-10 w-full h-[50px] flex justify-between items-center cursor-pointer  rounded-[10px]'>
      <div onClick={spaceHandler} className='w-full h-full  absolute rounded-[10px]'></div>
      <div className=''><h2 className='text-[#747474]'>{props.spacename}</h2></div>
      
      <div className='flex items-center gap-2'>

      <div>
        <span className='text-[#bfbfbf] text-[14px]'>Projects : {props.projectcount}</span>
      </div>

      <div className='flex gap-[10px] cursor-default bg-[#f5f5f5] py-[5px] px-[10px]  rounded-[5px] z-[40]'>

        <div className='w-[25px] cursor-pointer border-[1px] z-[20] hover:bg-[white] border-[#f2bf18] flex justify-center items-center h-[25px] rounded-[50%] border-dashed'>
          <img src={PersonAdd} alt='person' />
        </div>

        <div className='w-[25px] cursor-pointer border-[1px] z-[20] hover:bg-[white] border-[#08cbe9] flex justify-center items-center h-[25px] rounded-[50%] border-dashed'>
          <img src={Pencill} alt='person' />
        </div>


        </div>
      </div>
    </div>
  )
}

export default SpaceCard
