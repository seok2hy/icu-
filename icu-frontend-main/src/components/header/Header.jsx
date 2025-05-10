import React from 'react'

const Header = () => {
  return (
    <>
      <div className='fixed w-full flex justify-center items-center bg-slate-900 pt-10 pb-5'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#474F7A"/>
        <ellipse cx="47.8943" cy="40.2631" rx="32.1053" ry="38.6842" fill="#1F2544"/>
        <ellipse cx="58.1575" cy="41.0526" rx="21.8421" ry="30.5263" fill="#37B5B6"/>
        <ellipse cx="63.1575" cy="41.3158" rx="16.8421" ry="27.6316" fill="#81689D"/>
        </svg>
      </div>
    </>
     
  )
}

export default Header