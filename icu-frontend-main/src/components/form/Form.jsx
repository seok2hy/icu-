import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from 'axios';
 import CryptoJS from 'crypto-js';


const Form = ({ title, formHandler }) => {
  // const [userData, setUserData] = useState({id: '', password:''})
  const {register, setValue, getValues, handleSubmit, formState: {errors}, reset } = useForm({
  mode: 'onSubmit'
  
  })

  useEffect(() => {
  }, [])

 // 입력된 ID와 패스워드를 암호화하는 함수
 const encryptUserData = (ID, PASSWORD) => {
  const encryptedID = encryptData(ID, 'idSalt');
  const encryptedPassword = encryptData(PASSWORD, '');

  return {
    ID: encryptedID,
    PASSWORD: encryptedPassword,
  };
};

// 데이터 암호화 함수
const encryptData = (data, secretKey) => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

  const onSubmit = (data) => {
    const encryptedData = encryptUserData(data.id, data.password);

    formHandler(data, encryptedData)
    reset();
  }

  const notify = (message) => {
    if(errors && errors.id && message == errors.id.message ) {
      toast.error(`${message}`, { duration: 2000 })
    }
    if (errors && errors.password && message === errors.password.message) {
      toast.error(`${message}`, { duration: 2300 });
    }

  }

  const userID = {
    required: "아이디는 필수 필드입니다",
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "아이디는 영문자와 숫자만 포함해야 합니다",
    },
    minLength: {
      value: 4,
      message: "아이디는 최소 4자입니다",
    },
    maxLength: {
      value: 13,
      message: "아이디는 최대 13자입니다",
    },
  }


  const userPassword = {
    required: "비밀번호는 필수 필드입니다",
    maxLength: {
      value: 13,
      message: "비밀번호는 최대 13자입니다",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "비밀번호는 최소 8자, 영문자와 숫자를 포함해야 합니다",
    },
   

  }

  const userPasswordConfirm = {
    required: "비밀번호를 다시 입력하세요",
    validate: {
      matchesPreviousPassword: (value) => {
        const {password} = getValues();
          return password === value || "비밀번호가 일치하지 않습니다";
      }
    }
  }


  return (
    <>
    <section className='z-0 h-full flex justify-center items-center  font-[Pretendard] '>
    <div className='bg-gradient-to-t from-slate-800 to-cyan-300 p-3 rounded-[50px]'>
    <div className='px-10 py-10 bg-white rounded-[50px] flex-col items-center'>
    {/* Header */}
    <div className='flex flex-col justify-center text-center'>
      <div className='flex justify-center'>
      <IoPersonCircleOutline 
      className='h-20 w-20 justify-center'/>
      </div>
     <p className='pt-3 text-[28px] font-bold'>환영합니다</p>
     <p className='text-[16px] font-bold'>{title} 계속하기</p>
     
     {/* Input */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mt-2 mx-5 text-start text-md font-bold'>ID</p>
          <input 
              {...register("id", userID)}
              className="border mx-5 px-2 py-1 rounded-md" 
              placeholder='아이디를 입력하세요' 
              type="id" />

      <p className='mt-2 mx-5 text-start text-md font-bold'>Password</p>
          <input 
              {...register("password", userPassword)}
              className="border mx-5 px-2 py-1 rounded-md" 
              placeholder='비밀번호를 입력하세요' 
              type="password" />


       {title === '회원가입' && (
        <>
        <p className='mt-2 mx-5 text-start text-md font-bold'>Password Confirm</p>
          <input 
              {...register("passwordConfirm", userPasswordConfirm)}
              className="border mx-5 p-2 rounded-md" 
              placeholder='비밀번호를 다시 입력하세요' 
              type="password" />
        <p className='mt-2 mx-5 text-start text-md font-bold'>성명</p>
                      <input
                        {...register("name")}
                        className="border mx-5 px-2 py-1 rounded-md"
                        placeholder='성명'
                        type="text" />
                    
        <p className='mt-2 mx-5 text-start text-md font-bold'>전화번호</p>
        <input

          {...register("tel")}
          className="border mx-5 px-2 py-1 rounded-md"
          placeholder='전화번호'
          type="text" />
        </>
       )}
           
      <div>

      {errors?.passwordConfirm && (
           <p className='pt-3 font-semibold text-red-700'>{errors.passwordConfirm.message}</p>
         )}
          <button
          type='submit'
          className='px-10 my-8 py-3 font-bold bg-slate-300 shadow-orange-200 rounded-md'>
            {title}  
          </button>
        </div>
      </form>


          {/* ID 유효성 인증 실패 */}
          {title === '회원가입' && <Toaster />}
        {errors?.id && notify(errors.id.message)}
         {errors?.password && notify(errors.password.message)}
         
          { title == '회원가입' ? 
          ( <p className='text-[16px] font-medium'> 계정이 존재합니까? 
              <Link className='font-bold' to={'/login'}>
                {" "} 로그인
              </Link> </p> ) : 
          ( <p className='text-[16px] font-medium'> 계정이 없습니까? 
            <Link className='font-bold' to={'/register'}>
              {" "} 회원가입
            </Link> </p> )
          }
       
        </div>
    </div>
    </div>
  </section>
  </>
  )
}

export default Form