import React from 'react'

import Input from '../../UI/Input'
import Button1 from '../../UI/button1'

const SpaceFrom = () => {
  return (
    <div>
      <form>
        <Input placeholder='insert space name' label='space name' type='text' />
        <Button1 title='create'/>
      </form>
    </div>
  )
}

export default SpaceFrom
