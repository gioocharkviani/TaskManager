import React from 'react'

import Input from '../../UI/Input'
import Button1 from '../../UI/button1'
import Button2 from '../../UI/Button2'

import user from '../../../assets/Profile.webp'

const ProfileForm = () => {
  return (
    <div>
      <form className='flex gap-[30px]'>

      <div className='flex mt-[15px] flex-col gap-[30px] items-center'>
        <div className='w-[150px] h-[150px] overflow-hidden rounded-[50%]'><img src={user} alt='userPhoto' /></div>

        <Button1 title='choose photo'/>

      </div>

      <div>

        <div>
        <Input  placeholder='Username' label='Username' type='text'/>
        <Input  placeholder='your email' label='Email' type='text'/>
        </div>

        <div className='flex flex-col'>
        <h2>change password</h2>
        <Input  placeholder='Current password' label='New password' type='text'/>
        <Input  placeholder='your email' label='confirm New password' type='text'/>
        </div>

        <div className='flex  justify-end gap-3'>
        <Button2 title ='delete user'/>
        <Button1 title='change'/>
        </div>

      </div>

      </form>
    </div>
  )
}

export default ProfileForm
