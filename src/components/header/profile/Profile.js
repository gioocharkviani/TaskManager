import React from 'react'

import ProfileImg from '../../../assets/Profile.webp'
import Arrow from '../../../assets/arrow.svg'

const Profile = (props) => {
  return (
    <div onClick={props.active} className='cursor-pointer flex justify-between gap-3 items-center'>
    <div className='w-[48px] h-[48px] overflow-hidden relative rounded-[50%] bg-[#e6efff] flex justify-center items-center' >
        <img src={ProfileImg} className='w-full h-full' alt='profileIMg' />
    </div>
    <div>
        <img src={Arrow} alt='arrowIcon' />
    </div>
    </div>
  )
}

export default Profile
