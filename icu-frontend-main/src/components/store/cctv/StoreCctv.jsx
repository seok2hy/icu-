import React, { useEffect, useRef, useState } from 'react'

const StoreCctv = () => {
  const [option, setOption] = useState('파손');

  const videos = {
    "파손": "/videos/damage.mp4",
    "흡연": "/videos/smoking.mp4",
    "절도": "/videos/theft.mp4"
  };
  
  function handleSelectChange(event) {
    const value = event.target.value;
    setOption(value);
  }

  let videoRef = useRef(null)

  useEffect(() => {
    console.log('선택된 옵션: ', option);
  }, [option]);

  return (
    <>
      <div className='w-full flex font-[Pretendard] text-white justify-center'>
        <div className='w-full'>
          <div className='flex justify-start px-20 py-10'>
            <div className='min-w-[250px]'>
              <div className='font-bold text-[38px] min-w-1/2'>CCTV</div>
              <div className='text-black'>
                <select className='w-[150px]' onChange={handleSelectChange} value={option}>
                  <option value="파손">파손</option>
                  <option value="흡연">흡연</option>
                  <option value="절도">절도</option>
                </select>
              </div>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <div className='w-full md:w-[80%] lg:w-[60%] p-4 font-bold flex-col space-y-4'>
              <div className='flex justify-center'>
                <div className='w-full aspect-w-16 aspect-h-9'>
                  <video key={option} ref={videoRef} muted autoPlay loop>
                    <source src={videos[option]} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className='w-fit'>
                <div className='h-1/2 text-[18px]'>
                  <p>20XX.XX.XX.X요일 00:00:00</p>
                </div>
                <div className='h-1/2 text-[18px]'>
                  <p>감지 횟수 : N</p>
                </div>
              </div>

              <div className='flex justify-center'>
                <label className='w-full'>
                  <textarea className='w-full p-2 text-black' placeholder='로그백 내용' rows={5} cols={105} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreCctv