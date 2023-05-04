import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className='flex flex-col items-center '>
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
    </>     
  )
}

export default SignUp
