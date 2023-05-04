import React , {useState} from 'react'

import Searchform from './searchbar/searchform'
import Logo from './logo/Logo'
import Notification from './notification/Notification'
import Profile from '../header/profile/Profile'
import Modal from '../modal/Modal'
import ProfileForm from '../../components/header/profile/ProfileForm'

const Header = () => {

// PROFILE MODAL ACTIVE
const [profileModalActive , setprofileModalActive] = useState(false)
const modalStatetrue = () =>{setprofileModalActive(true)}
const modalStatefalse= () =>{setprofileModalActive(false)}
// PROFILE MODAL ACTIVE

// NOTIFICATION MODAL ACTIVE
const [notifiModalActive , setnotifiModalActive] = useState(false)
const notifimodalStatetrue = () =>{setnotifiModalActive(true)}
const notifimodalStatefalse= () =>{setnotifiModalActive(false)}
// NOTIFICATION MODAL ACTIVE

  return (
    <div className='w-full h-[80px]  bg-white flex justify-center items-center fixed z-50'>

      <div className='w-[95%] flex justify-between'>
        <div className='flex w-full justify-between'>
        <Logo />
        <Searchform />
        </div>

        <div className='w-full flex justify-end gap-[20px]'>
            <Notification active={notifimodalStatetrue}/>
            <Profile active={modalStatetrue}/>
        </div>

       </div>

      {profileModalActive && <Modal ModalName='Profile Info' closeModal={modalStatefalse}><ProfileForm /></Modal>}
      {notifiModalActive && <Modal ModalName='Notification' closeModal={notifimodalStatefalse}>NoTification</Modal>}

    </div>
  )
}

export default Header
