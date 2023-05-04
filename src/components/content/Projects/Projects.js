import React, { useState } from 'react'
import Modal from '../../modal/Modal'

import ProjectContent from './ProjectContent'

import AddNewBtn from '../../UI/AddNewBtn'

const Projects = () => {

const [CreateSpace , setCreateSpace] = useState(false)
const modalStatetrue = () =>{setCreateSpace(true)}
const modalStatefalse= () =>{setCreateSpace(false)}

  return (
    <div className='flex gap-[30px]'>

        <div className='w-full'>
          <ProjectContent />
        </div>

        <div>
            <AddNewBtn AddNewBtn={modalStatetrue}/>
        </div>


      {CreateSpace && 
      <Modal ModalName='Create New Project' closeModal={modalStatefalse}>
     
      </Modal>}

    </div>
  )
}

export default Projects
