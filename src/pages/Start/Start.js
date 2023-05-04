import React from 'react'

import Header from './Header'
import UserLogin from '../../components/Auth/UserLogin'
import Footer from './Footer'

import Image1 from '../../assets/clip-message-sent 1.png'

const Start = () => {
  return (
    <div className='w-full flex justify-center'>
      <div  className='w-full h-[100vh] bg-[#ffffff] flex justify-center'>
        <div className='w-[95%] flex flex-col justify-between py-[20px]'>
            <Header />
            <UserLogin />
            <Footer />
        </div>
      </div>

      <div className='w-full bg-[#E5E5E5] h-[100vh] flex justify-center '>
        <div className='w-[95%] flex justify-center items-center'>
           <img src={Image1} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Start
