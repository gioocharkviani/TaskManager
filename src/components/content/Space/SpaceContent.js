import React from 'react'

import SpaceCard from './SpaceCard'

const SpaceContent = () => {

  return (
    <div>
    
        <div>
            <div className='flex justify-center'><h2 className='text-[20px] pb-[10px] p'>Your Spaces</h2></div>
            <div className='flex flex-col gap-[10px] pb-[20px]'>
                <SpaceCard projectcount='1' spacename='Geparts'/>
                <SpaceCard projectcount='7' spacename='Re-soft'/>
                <SpaceCard projectcount='2' spacename='Re-Educate'/>
            </div>
        </div>
      

      <div>
        <div className='flex justify-center'><h2 className='text-[20px] pb-[10px] p'>Working Spaces</h2></div>
        <div className='flex flex-col gap-[10px] pb-[20px]'>
                <SpaceCard projectcount='1' spacename='Geparts'/>
                <SpaceCard projectcount='7' spacename='Re-soft'/>
                <SpaceCard projectcount='2' spacename='Re-Educate'/>
            </div>
      </div>

    </div>
  )
}

export default SpaceContent
