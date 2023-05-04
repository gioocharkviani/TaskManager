import React from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/content/Main'
import Modal from '../../components/modal/Modal'

const home = () => {
  return (
    <div className='flex flex-col '>
        <Header />
        <Main />
    </div>
  )
}

export default home
