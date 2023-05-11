import React, { useState } from 'react';
import Navbar from '../aside/Navbar/Navbar';
import Space from './Space/Space';
import Projects from './Projects/Projects';
import Tasks from './Dnd/Tasks';


const Main = () => {
  const [activeLink, setActiveLink] = useState('space');

  const handleNavlinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='w-full flex justify-center relative top-[100px]'>
      <div className='w-[95%] flex justify-center relative gap-[25px] '>

        <div className='min-w-[80px]  pb-[30px]'>
          <Navbar onNavlinkClick={handleNavlinkClick} activeLink={activeLink} />
        </div>
        
        <div className='w-[92%]'>
          {activeLink === 'space' && <Space />}
          {activeLink === 'projects' && <Projects />}
          {activeLink === 'DndTasks' && <Tasks />}
        </div>
      </div>
    </div>
  );
};

export default Main;