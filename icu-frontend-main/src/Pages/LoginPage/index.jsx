import React from 'react'
import Header from '../../components/header/Header'
import SignIn from './sign-in/SignIn'

const LoginPage = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
      <Header />
      <SignIn />
    </div>
    </>
  )
}

export default LoginPage