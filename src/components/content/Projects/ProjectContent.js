import React from 'react'

import Loader from '../../UI/Loader/Loader'
import ProjectCard from './ProjectCard'

const ProjectContent = () => {
  return (
    <div>
        <div className='flex justify-center'><h2 className='text-[20px] pb-[10px] p'>Your Projects</h2></div>
            <div className='flex flex-col gap-[10px] pb-[20px]'>
                <Loader />

                <ProjectCard projectname='Project name'/>
            </div>

    </div>
  )
}

export default ProjectContent
