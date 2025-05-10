import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import Table from './Table.jsx'
import './Table.css';

const Chart = () => {
  const data = [
    {
      name: '1월',
      loudSinger: 7,
      smoking: 4,
      theft: 8,
    },
    {
      name: '2월',
      loudSinger: 4,
      smoking: 5,
      theft: 7,
    },
    {
      name: '3월',
      loudSinger: 5,
      smoking: 2,
      theft: 10,
    },
  ];    

  const [selectedMonth, setSelectedMonth] = useState('1월');
  const filteredData = data.filter(item => item.name === selectedMonth);

  return (
    <>
    <div className='w-full flex font-[Pretendard] text-white justify-center'>
      <div className='w-full'>
        <div className='w-full min-full flex-col'>
          <div className='flex justify-start px-20 py-10'>
            <div className='min-w-[250px]'>
              <div className='font-bold text-[38px] min-w-1/2'>차트</div>
            </div>
          </div>
        </div>
        
        <div className='w-full flex justify-center'>
          <div className='w-[70%] md:w-[60%] p-4 font-bold flex-col'>
            <div className='w-full flex justify-center flex-col items-center'>
              <ResponsiveContainer width={'100%'} height={500}>
                <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                  <CartesianGrid vertical ={false} storkeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend />
                  <Bar dataKey="loudSinger" fill="#e0e7ff" label={{position: 'top', fontsize: 14}} />
                  <Bar dataKey="smoking" fill="#a5b4fc" label={{position: 'top', fontsize: 14}} /> 
                  <Bar dataKey="theft" fill="#6366f1" label={{position: 'top', fontsize: 14}} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <select
              className='W-[200px] text-black my-[20px]'
              style={{ width:'130px', height:'30px', textAlign:'center' }}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option>1월</option>
              <option>2월</option>
              <option>3월</option>
            </select> 
            <Table data={filteredData} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chart