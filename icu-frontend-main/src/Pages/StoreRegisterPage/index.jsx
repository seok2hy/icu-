import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import StoreRegistration from '../../components/store_registration/StoreRegistration'

const StoreRegisterPage = () => {
  useEffect(() => {

  }, [])

  return (
    <>
    <div className='h-screen bg-slate-900'>
      <Nav />
      <div className='flex'>
        <StoreRegistration />
      </div>
    </div>
    </>
  )
}

export default StoreRegisterPage