import React from 'react'
import ReactDOM from 'react-dom';
import CloseSvg from '../../assets/closeSvg.svg'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div  className='w-full fixed  z-[99999]  h-full flex items-center justify-center'>

      <div onClick={props.closeModal} className='w-full h-[100vh] bg-[black] opacity-75 z-30 absolute'></div>

      <div className='relative z-[999999]'>
        <div className='p-[20px] flex flex-col bg-white rounded-[10px]'>
          <header className='flex justify-between gap-[100px] border-b-[1px] border-[gray] pb-[10px]'>
            <h2>{props.ModalName}</h2>
            <button  onClick={props.closeModal}><img src={CloseSvg} /></button>
          </header>
        {props.children}
        </div>
      </div>

    </div>
    ,
    document.getElementById('portal')
  )
}

export default Modal
