import React, { useEffect, useState } from 'react'
import SideNav from '../../nav/SideNav'
import StoreList from '../list/StoreList'
import { Button } from '@material-tailwind/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StoreRegistration = ({setShowRegister, fetchStores}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [wifi, setWifi] = useState('');
  const [token, setToken] = useState(localStorage.getItem('userToken') || '')

  
  const handleSubmit = async () => {
    try {
      if(!token) {
        prompt('토큰이 없습니다. 로그인 후 다시 시도하세요');
      }
      const response = await axios.post('http://localhost:10110/api/store', { name, location, wifi },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ); // ownerId를 owner로 추가하여 전달
      console.log(response.data); // 서버에서 받은 응답 확인

    } catch (error) {
      console.error('매장 등록 중 오류 발생:', error);
      // 오류 처리
    }
    setShowRegister(false); // 성공 시 뷰 변경
    fetchStores()
  };



  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-between items-center px-10'>
        {/* 매장 리스트 */}
        <div className='w-full'>
        <p className='py-2 text-3xl font-bold'>매장 등록하기</p>
        <p className='text-md'>관리할 매장을 등록하세요</p>
        </div>
      </div>
      <div className='mt-10 w-full lg:w-2/3 px-10 '>
      <ul className='space-y-10'>
                  <li className='flex text-lg justify-between items-center text-center'>
                    <p>매장 이름</p>
                    <input className='font-medium border px-2 py-1 rounded-md text-black' placeholder='매장 이름을 입력하세요.' value={name} onChange={(e) => setName(e.target.value)} />
                  </li>

                  <li className='flex text-lg justify-between items-center text-center'>
                    <p>매장 위치</p>
                    <input className='font-medium  border px-2 py-1 rounded-md text-black' placeholder='내용을 입력하세요.' value={location} onChange={(e) => setLocation(e.target.value)} />
                  </li>

                  <li className='flex text-lg justify-between items-center text-center'>
                    <p>매장 와이파이 번호</p>
                    <input className='font-medium  border px-2 py-1 rounded-md text-black' placeholder='내용을 입력하세요.' value={wifi} onChange={(e) => setWifi(e.target.value)} />
                  </li>

                  <li className='flex justify-center'>
                    <div className='w-full pt-5 flex justify-center'>
                      
                      <Button 
                        onClick={handleSubmit}
                        className='w-2/5 h-[60px] px-10 py-2 bg-slate-700 flex justify-center items-center rounded-lg'>
                        <p>등록</p>
                      </Button>

                    </div>
                  </li>
                </ul>
      </div>
      
      </div>
   






      
    </>
  )
}

export default StoreRegistration