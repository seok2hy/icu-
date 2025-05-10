import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import SignUp from '../RegisterPage/sign-up/SignUp'

const RegisterPage = () => {
  useEffect(() => {
  }, [])
  
  return (
    <>
    <div className='flex flex-col h-screen'>
      <SignUp />
    </div>
    </>
    
  )
}

export default RegisterPage