import React from 'react'

const Alert = () => {
  return (
    <>
      <div className='z-0 shadow-md top-[60px] absolute w-[230px] text-center font-Pretendard text-black bg-white rounded-lg'>
      <ul>
        <li className='m-5 mx-10 rounded-[50px] bg-slate-300'>2024.01.01</li>
        <li className='mt-2 mx-5 text-left '>매장명1 - 알림 내용</li>
        <li className='mb-2 mx-5 text-[16px] font-semibold text-left'>00:00</li>
      </ul>
      <hr />
      <ul>
        <li className='mt-3 mx-10 rounded-[50px] bg-slate-300'>2024.01.02</li>
        <li className='mt-2 mx-5 text-left '>매장명2 - 알림 내용</li>
        <li className='mb-2 mx-5 text-[16px] font-semibold text-left'>00:00</li>
      </ul>
      <hr />

      <ul>
        <li className='mt-3 mx-10 rounded-[50px] bg-slate-300'>2024.01.03</li>
        <li className='mt-2 mx-5 text-left '>매장명3 - 알림 내용</li>
        <li className='mb-2 mx-5 text-[16px] font-semibold text-left'>00:00</li>
      </ul>
    </div>
    </>
    
  )
}

export default Alert