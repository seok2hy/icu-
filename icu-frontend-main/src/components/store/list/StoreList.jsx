import React, { useEffect, useState } from 'react'
import SideNav from '../../nav/SideNav'
import { Button } from '@material-tailwind/react'
import StoreRegistration from '../list/StoreRegistration'
import axios from 'axios';

const StoreList = ({}) => {
  const [showRegister, setShowRegister] = useState(false)
  const [stores, setStores] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetchToken();
    if (token) {
      // 페이지가 로드될 때 매장 리스트를 불러옴
      fetchStores();
    }
  }, [token])
  

  const fetchStores = async () => {
    try {
      const response = await axios.get('http://localhost:10110/api/store', {
        headers: {
          Authorization: `Bearer ${token}` // 토큰을 헤더에 포함
        }
      });
      setStores(response.data);
    } catch (error) {
      console.error('매장 리스트를 불러오는 중 오류 발생:', error);
    }
  }

  const fetchToken = () => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.error('토큰이 없습니다. 로그인 후 다시 시도해주세요.');
    }
  };


  return (
    <>
    {!showRegister ? (
      <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-between items-center px-10'>
        {/* 매장 리스트 */}
        <div className='w-full'>
        <p className='py-2 text-3xl font-bold'>매장 리스트</p>
        <p className='text-md'>관리할 매장을 선택하세요</p>
        </div>
        <div className='flex gap-5 my-3 w-full justify-end'>
          {/* 매장 버튼 그룹 */}
        <Button
          onClick={() => {setShowRegister(true)}} 
          className='px-5 bg-slate-800 rounded-lg'>
          <span>매장 등록</span>
        </Button>
        <Button className='px-5 bg-slate-800 rounded-lg'>
          <span>편집</span>
        </Button>
        </div>
        <div>
        </div>
      </div>

          {/* 매장 블록 리스트 */}
            <div className='sm:w-full sm:mx-10 md:mx-10 lg:mx-10 md:w-2/3 lg:w-1/2 my-10 bg-slate-800 rounded-2xl p-7 space-y-3'>
            <li className='flex justify-between font-semibold'>
                <ul>매장명</ul>
                <ul>이상 감지 행동 알림</ul>
            </li>
            <hr />
            {stores.map(store => (
                    <li key={store._id} className='flex justify-between items-center text-center'>
                      <ul className='pr-10 '>{store.name}</ul>
                      <div className='flex justify-center'>
                        <ul className='bg-red-500 rounded-lg px-3 py-1'>No alter</ul>
                      </div>
                    </li>
                  ))}
            </div>
          </div>
    ) : (
      <StoreRegistration setShowRegister={setShowRegister} fetchStores={fetchStores}/>
    )}
   
    </>
    
  )
}

export default StoreList