import React, { useState } from 'react'

import Input from '../UI/Input'
import Button1 from '../UI/button1'

const LoginForm = () => {

const [loginform , setLoginForm] = useState(true)

const [LoginEmail , SetLoginEmail] = useState('')
const [LoginPassword , SetLoginPassword] = useState('')

const [SignUpEmail , SetSignUpEmail] = useState('')
const [SignUpPassword , SetSignUpPassword] = useState('')
const [confirmedPassword , SetconfirmPasword] = useState('')

const [errors, setErrors] = useState({});


//VALID INPUTS 
const LoginValidInput = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errors = {};

    if (!LoginEmail) {
        errors.userEmail = "Email is required";
      } else if (!emailRegex.test(LoginEmail)) {
        errors.userEmail = "Invalid email format";
      }
  
      if (!LoginPassword) {
        errors.userPassword = "Password is required";
      } else if (!passwordRegex.test(LoginPassword)) {
        errors.userPassword = "Password must be at least 8 characters long and contain at least one letter and one number";
      }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
//VALID INPUTS 

//VALID SignUp INPUTS 
const SignUpValidInput = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errors = {};

      if (!SignUpEmail) {
        errors.SignUpEmail = "Email is required";
      } else if (!emailRegex.test(SignUpEmail)) {
        errors.SignUpEmail = "Invalid email format";
      }

      if (!SignUpPassword) {
        errors.signUpPassword = "Password is required";
      } else if (!passwordRegex.test(SignUpPassword)) {
        errors.signUpPassword = "Password must be at least 8 characters long and contain at least one letter and one number";
      }

      if(confirmedPassword !== SignUpPassword) {
        errors.confirmedPassword = "Confirmed Password is Incorect";
      }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
//VALID SignUp INPUTS 


// Login User INfO

const EmailHandler = (e) =>{
    SetLoginEmail(e.target.value)
}

const passwordHandler = (e) =>{
    SetLoginPassword(e.target.value)
}


const LoginuserInfoHandler = (event) =>{
    event.preventDefault()
    const Validinput = LoginValidInput();
    if(Validinput){
        console.log({Email: LoginEmail, Password:LoginPassword});
      }
    
}
// Login User INfO


const SignUpHandler = ()=>{
    setLoginForm(false)
}
const BackToLogin = ()=>{
    setLoginForm(true)
}


//Sign Up Info
const ConfirmpasswordHandler = (e) =>{
    SetconfirmPasword(e.target.value)
}

const SignUpEmailHandler = (e) => {
    SetSignUpEmail(e.target.value);
}

const SignUpPasswordHandler = (e) => {
    SetSignUpPassword(e.target.value)
}

const SignUpuserInfoHandler = (event) =>{
    event.preventDefault()
    const SignUpValid = SignUpValidInput();
    if(SignUpValid){
        console.log({Email:SignUpEmail , Password: confirmedPassword,});
    }
}
//Sign Up Info



return (
    <div className='flex flex-col gap-[30px] items-center w-full'>

        {loginform &&
      <form className='flex flex-col items-center w-full' onSubmit={LoginuserInfoHandler}>
        <h2>User Login</h2>
        <Input onChange={EmailHandler} placeholder='Email' label='Email' type='text'   />
        {errors.userEmail && <div className='w-[250px]'><p className='text-[red] text-[13px]'>{errors.userEmail}</p></div> }
        <Input onChange={passwordHandler} placeholder='Password' label='Password' type='password'  />
        {errors.userPassword && <div className='w-[250px]'><p className='text-[red] text-[13px]'>{errors.userPassword}</p></div>}
        <div className='flex mt-[10px]'>
            <Button1 title='Login' />
        </div>
      </form>}


      {!loginform && <div className='flex flex-col items-center '>
      <form className='flex flex-col items-center w-full' onSubmit={SignUpuserInfoHandler}>
        <h2>Create New User</h2>
        <Input onChange={SignUpEmailHandler} placeholder='Email' label='Email' type='text'   />
        {errors.SignUpEmail && <div className='w-[250px]'><p className='text-[red] text-[13px]'>{errors.SignUpEmail}</p></div> }
        <Input onChange={SignUpPasswordHandler} placeholder='Password' label='Password' type='password'  />
        {errors.signUpPassword && <div className='w-[250px]'><p className='text-[red] text-[13px]'>{errors.signUpPassword}</p></div> }
        <Input onChange={ConfirmpasswordHandler} placeholder='Password' label='Confirm Password' type='password'  />
        {errors.confirmedPassword && <div className='w-[250px]'><p className='text-[red] text-[13px]'>{errors.confirmedPassword}</p></div> }
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