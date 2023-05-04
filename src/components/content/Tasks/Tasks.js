import React from 'react'
import TaskHeader from './TaskHeader'
import Taskcontroller from './Taskcontroller'


const Tasks = () => {

  const data = [
    { 
      title : 'Todo' ,  status : 'open' ,   color: '#9710ff',  
      items : [
        {title: 'Task 1' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 2' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 3' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 4' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'In progress' ,  status : 'open' ,   color: '#1283ed',  
      items : [
        {title: 'Task 5' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 6' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 7' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'Review' ,  status : 'open' ,   color: '#d75d0b',  
      items : [
        {title: 'Task 543' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 43243' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'Complated' ,  status : 'open' ,   color: '#50e300',  
      items : [
        {title: 'Task 53243' , description : 'D' , dedline: 'Date' , priority: ''},
        {title: 'Task 12332' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    

  ]
  

  return (


    <div className='flex flex-col gap-[10px]'>

      <TaskHeader />
      
      <div className=' flex gap-4 overflow-x-auto'>
          <Taskcontroller data={data}/>
      </div>

    </div>
  )
}

export default Tasks
