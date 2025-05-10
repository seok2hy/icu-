import React from 'react'


const UserInfo = () => {
  return (
    <>
			<div className='w-full min-w-full flex font-[Pretendard] text-white justify-center'>
				{/* 사이드 네비게이션 */}

				<div className='w-full'>
					{/* 마이페이지 정보 */}
					<div className='w-full min-full flex-col'>
						<div className='flex justify-start px-20 py-10'>
							<div className='min-w-[250px]'>
								<div className='font-bold text-[38px] min-w-1/2'>마이페이지</div>
							</div>
						</div>
					</div>

					<div className='w-full flex justify-center'>
						<div className='w-full md:w-[80%] lg:w-[60%] text-[18px] md:text-[22px] font-bold'>
							<ul className='w-full px-3 md:px-10 space-y-7'>
								<li className='flex justify-between items-center text-center'>
									<p>사용자</p>
									<p>ID</p>
								</li>

								<li className='flex justify-between items-center text-center '>
									<p>별명</p>
									<input className='border px-2 py-1 rounded-md text-black text-[20px] font-medium' placeholder='별명'/>
								</li>

								<li className='flex justify-between items-center text-center '>
									<p>전화번호</p>
									<div className='text-black'>
										<select className='w-[100px] mx-1 md:mx-3'>
											<option>010</option>
											<option>011</option>
											<option>070</option>
										</select>
										<input className='w-[100px] border px-2 py-1 mx-1 md:mx-3 rounded-md'/>
										<input className='w-[100px] border px-2 py-1 ml-1 md:ml-3 rounded-md'/>
									</div>
								</li>
								
								<li className='flex justify-between items-center text-center'>
									<p>새 비밀번호</p>
									<input className='border px-2 py-1 rounded-md text-black text-[20px] font-medium' placeholder='새 비밀번호' type='password'/>
								</li>

								<li className='flex justify-between items-center text-center '>
									<p>비밀번호 확인</p>
									<input className='border px-2 py-1 rounded-md text-black text-[20px] font-medium'placeholder='비밀번호 확인' type='password'/>
								</li>

								<li className='flex justify-center'>
									<div className='w-full pt-5 flex justify-center text-[20px] font-medium'>
										<div className='w-3/5 px-2 py-1 bg-slate-700 flex justify-center rounded-lg'>
											<p>수정 완료</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div> 
		</>
  )
}

export default UserInfo