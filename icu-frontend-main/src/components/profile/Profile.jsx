import React from 'react'

import { useNavigate } from 'react-router-dom'



const Profile = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userToken')
    navigate('/')
  }


  return (
    <>
    <div className='w-[200px] py-2 bg-slate-800 shadow-md top-[65px] right-3 absolute px-3 font-[Pretendard] text-white rounded-lg'>
    <ul>
    <li>
      <button
          onClick={() => {navigate('/mypage')}}
          className='text-left w-full py-1 rounded-md hover:bg-slate-900'
         >
        <p className='px-3'>마이페이지</p>
      </button>
    </li>
    <li>
      <button 
          onClick={logoutHandler}
          className='text-left w-full py-1 rounded-md hover:bg-slate-900'
          >
        <p className='px-3'>로그아웃</p>
      </button>
    </li>
    </ul>
  </div>
  </>
  )
}

export default Profile