import React from 'react';

const NavLinks = (props) => {
  return (
    <li
      onClick={props.navlink}
      className={`w-[48px] cursor-pointer h-[48px] rounded-[50%] hover:bg-[#E0EAFF] bg-[#F8F9FB] flex justify-center items-center ${
        props.active ? 'bg-[#d9e5fe]' : ''
      }`}
    >
      <img className='w-[24px] h-[24px]' src={props.imglink} alt={props.imgalt} />
    </li>
  );
};

export default NavLinks;