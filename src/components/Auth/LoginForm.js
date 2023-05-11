import React, { useState } from 'react'

import Input from '../UI/Input'
import Button1 from '../UI/button1'

const LoginForm = () => {

const [loginform , setLoginForm] = useState(true)

const [Email , SetEmail] = useState('')
const [Password , SetPasword] = useState('')
const [confirmedPassword , SetconfirmPasword] = useState('')


// Login User INfO
let LoginUserInfo = {
    Email:Email ,
    Password :Password 
}

const EmailHandler = (e) =>{
    SetEmail(e.target.value)
}

const passwordHandler = (e) =>{
    SetPasword(e.target.value)
}
const LoginuserInfoHandler = (event) =>{
    event.preventDefault()
    console.log(LoginUserInfo);
    SetPasword('')
    SetEmail('')
}
// Login User INfO

const SignUpHandler = ()=>{
    setLoginForm(false)
}
const BackToLogin = ()=>{
    setLoginForm(true)
}


//Sign Up Info
let SignUpUserInfo = {
    Email:Email ,
    Password :confirmedPassword 
}
const ConfirmpasswordHandler = (e) =>{
    SetconfirmPasword(e.target.value)
}

const SignUpuserInfoHandler = (event) =>{
    event.preventDefault()
    console.log(SignUpUserInfo);
    SetconfirmPasword('')
    SetEmail('')
}
//Sign Up Info



return (
    <div className='flex flex-col gap-[30px] items-center'>

        {loginform &&
      <form className='flex flex-col items-center w-full' onSubmit={LoginuserInfoHandler}>
        <h2>User Login</h2>
        <Input onChange={EmailHandler} placeholder='Email' label='Email' type='text'   />
        <div className='w-full'><p className='text-[red] text-[13px]'>Input errror codes</p></div>
        <Input onChange={passwordHandler} placeholder='Password' label='Password' type='text'  />
        <div className='w-full'><p className='text-[red] text-[13px]'>Input errror codes</p></div>
        <div className='flex mt-[10px]'>
            <Button1 title='Login' />
        </div>
      </form>}

      {!loginform && <div className='flex flex-col items-center '>
      <form className='flex flex-col items-center w-full' onSubmit={SignUpuserInfoHandler}>
        <h2>Create New User</h2>
        <Input onChange={EmailHandler} placeholder='Email' label='Email' type='text'   />
        <Input onChange={passwordHandler} placeholder='Password' label='Password' type='text'  />
        <Input onChange={ConfirmpasswordHandler} placeholder='Password' label='Confirm Password' type='text'  />
        <div className='flex '>
            <Button1 title='Sign Up' />
        </div>
      </form>
            <p>or</p>
        <div>
            <button onClick={BackToLogin}><p className='text-[14px]'>Login</p></button>
        </div>
        </div>
      }
      
        {loginform &&
        <div>
            <button onClick={SignUpHandler}><p className='text-[14px]'>Create New Account</p></button>
        </div>}

    </div>
  )
}

export default LoginForm