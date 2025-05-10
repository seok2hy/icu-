import React, { useEffect, useState } from 'react'
import { BiSolidCctv } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

const SideNav = ({ setCategory }) => {

  return (
    <>
    <div className='flex text-lg font-medium lg:mt-10
     md:p-10 items-center
     justify-between px-7 p-10
     md:flex-row lg:flex-col
     md:justify-between lg:justify-start
     md:gap-20 lg:gap-5'>
      {/* 매장 관리 이동 버튼 */}
      <button
          onClick={() => setCategory('showStorelist')}>
          <li className='flex items-center lg:w-40'>
          <FaStore className='h-5 w-8 m-2 pr-2' />
          <p className=''>매장 관리</p>
          </li>
        </button>
      

        {/* 차트 이동 버튼 */}
        <button
          onClick={() => setCategory('showChart')}>

        <li className='flex items-center lg:w-40'>
        <FaChartSimple className='h-5 w-8 m-2 pr-2 '/>
        <p className=''>차트</p>
        </li>
        </button>

        {/* CCTV 이동 버튼 */}
        <button
          onClick={() => setCategory('showCctv')}>
        <li className='flex items-center lg:w-40'>
        <BiSolidCctv className='h-6 w-8 m-2 pr-2 '/>
        <p className=''>CCTV</p>
        </li>
        </button>
    </div>
    
    </>
  )
}

export default SideNav