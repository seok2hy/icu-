import React, { useEffect } from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import Alert from '../alert/Alert';
import Profile from '../profile/Profile';

import { useNavigate } from 'react-router-dom';



const Nav = () => {
  const [alert, setAlert] = useState(false);
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  }, [alert, profile])
  

  return (
<nav className='flex justify-between items-center px-5 lg:px-20 py-10'>
  

    <button
      onClick={() => {navigate('/homepage')}}

     >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#474F7A"/>
        <ellipse cx="47.8943" cy="40.2631" rx="32.1053" ry="38.6842" fill="#1F2544"/>
        <ellipse cx="58.1575" cy="41.0526" rx="21.8421" ry="30.5263" fill="#37B5B6"/>
        <ellipse cx="63.1575" cy="41.3158" rx="16.8421" ry="27.6316" fill="#81689D"/>
        </svg>
    </button>



  <ul className='flex text-lg  font-bold space-x-5 text-white justify-center items-center'>
    {/* 알림 드롭다운 버튼 */}
    <li>
      <div className='relative flex justify-center'>
        <button onClick={() => {setAlert(!alert)
          if(profile == true) {
            setProfile(false)
          }}}>
        <FaBell className='h-[40px] w-[40px]' />
        {!alert && (<div className='absolute rounded-full w-3 h-3 bg-red-600 top-0 right-0'></div>)}
        </button>
        {alert && (
        <Alert />
        )}
      </div>
    </li>
    {/* 마이페이지 버튼 */}
    <li>
      <div className='relative flex justify-center'>
        <button onClick={() => {setProfile(!profile)
          if(alert == true) {
            setAlert(false)
          }
        }}>
        <IoPersonCircleOutline className='h-[50px] w-[50px]'/>
        </button>
        {profile && (<Profile />)}
      </div>  
     
    </li>
  </ul>
</nav>

  )
}

export default Nav