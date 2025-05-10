import React from 'react'
import Form from '../../../components/form/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp =  ( ) => {
  const navigate = useNavigate()
  
  const formHandler = async (data, encryptedData) => {
    console.log(data)
    console.log(encryptedData)
    try {
      const response = await fetch('http://localhost:10110/master/create', {
        method: 'POST',  // POST 메서드 사용
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...encryptedData,
          usertype: 'master',
          name: data.name,
          tel: data.tel,
        })
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Response not OK', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

 

  return (
    <>
    <div className='bg-slate-900 h-full'>
      <Form title={'회원가입'} formHandler={formHandler}/>
    </div>
  </>
  
  )
}

export default SignUp