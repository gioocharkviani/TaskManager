import React from 'react';
import NavLinks from '../../UI/NavLinks';

import LogOutSvg from '../../../assets/Logout.svg';

import SpaceSvg from '../../../assets/space.svg';
import ProjectSvg from '../../../assets/project-icon.svg'

const Navbar = (props) => {
  return (
    <div className='p-[20px]  bg-[#fff]  rounded-[40px] py-[15px] top-[100px] z-[9999] h-[80vh] fixed '>
      <div className='flex flex-col justify-between h-full'>
        <ul className='flex items-center flex-col gap-2 w-full justify-center'>

          <NavLinks
            navlink={() => props.onNavlinkClick('space')}
            imglink={SpaceSvg}
            imgalt='Space'
            active={props.activeLink === 'space'}
          />

          <NavLinks
            navlink={() => props.onNavlinkClick('projects')}
            imglink={ProjectSvg}
            imgalt='projects'
            active={props.activeLink === 'projects'}
          />

          <NavLinks
            navlink={() => props.onNavlinkClick('DndTasks')}
            imglink={SpaceSvg}
            imgalt='Tasks'
            active={props.activeLink === 'DndTasks'}
          />
          
        </ul>
        <ul className='flex w-full justify-center items-center flex-col'>
          <NavLinks imglink={LogOutSvg} imgalt='Logout' />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;