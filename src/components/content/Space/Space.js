import React, { useState } from 'react'
import Modal from '../../modal/Modal'

import SpaceContent from './SpaceContent'

import AddNewBtn from '../../UI/AddNewBtn'
import SpaceFrom from './SpaceFrom'

const Space = () => {

const [CreateSpace , setCreateSpace] = useState(false)
const modalStatetrue = () =>{setCreateSpace(true)}
const modalStatefalse= () =>{setCreateSpace(false)}

  return (
    <div className='flex gap-[30px]'>

        <div className='w-full'>
          <SpaceContent />
        </div>

        <div>
            <AddNewBtn AddNewBtn={modalStatetrue}/>
        </div>


      {CreateSpace && 
      <Modal ModalName='Create New Space' closeModal={modalStatefalse}>
      <SpaceFrom />
      </Modal>}

    </div>
  )
}

export default Space
