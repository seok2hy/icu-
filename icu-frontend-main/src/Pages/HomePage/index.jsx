import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import SideNav from '../../components/nav/SideNav'
import StoreList from '../../components/store/list/StoreList'
import StoreChart from '../../components/store/chart/StoreChart'
import StoreCctv from '../../components/store/cctv/StoreCctv'

const HomePage = () => {
  const [category, setCategory] = useState('showStorelist');

  useEffect(() => {
  
    return () => {
      
    }
  }, [category])

  return (
    <>
    <div className='min-h-screen bg-slate-900 flex flex-col'>
        <Nav />
        <div className='w-full lg:flex justify-center text-white font-Pretendard
         lg:px-36 '>
          <SideNav setCategory={setCategory}/>
          {category == 'showStorelist' && <StoreList />}
          {category == 'showChart' && <StoreChart />}
          {category == 'showCctv' && <StoreCctv />}
      </div>
    </div>
    </>
  )
}

export default HomePage