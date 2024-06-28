import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigation = useNavigate()

  let User = ['Tahsin', 'Tuhin', 'Badar']

  const handleclick = (index) => {

    navigation('/about', { state: { a: index } })

  }

  return (
    <>
      <div className='img flex justify-center items-center min-h-screen'>

        <div className='bg-[rgba(107,33,168,0.4)] max-w-[500px] min-h-[300px] backdrop-blur-[20px] border-white flex flex-col justify-center items-center rounded-[10px] text-white px-[12px]'>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus adipisci sequi ipsam voluptatem neque quod quibusdam minus! Amet, dolores. Quam, in accusantium.</p>
        </div>

      </div>

      <div className='h-[100vh] bg-[rgba(0,0,0,0.2)] px-[20px] relative'>
        <div className='bg-indigo-500 w-[40%] h-[30%] rounded-[100%] blur-[90px] absolute py-[40px] z-1 top-[40%] right-[30%]'></div>
        <div className=''>
          <h1 className=' text-[20px] font-bold text-center py-[12px]'>Where would you like to go</h1>
          <p className='text-center'>Explore your travel opportunities with us</p>

          <div className='max-w-[800px] min-h-[300px] bg-[rgba(255,255,255,0.36)] my-[20px] m-auto backdrop-blur-[40px] p-[10px] rounded-[5px] border-slate-400'>

            <div className='flex gap-[20px] my-[40px]'>
              <h1>Flight</h1>
              <h1>Hotels</h1>
              <h1>Cars</h1>
            </div>

            <div className='flex gap-[22px] flex-wrap'>

              <div className='p-[10px] bg-[rgba(255,255,255,0.6)] rounded-[10px]'>
                <h1>Leaving from</h1>
                <p>Jeddah,Saudi Arabia</p>
              </div>

              <div className='p-[10px] bg-[rgba(255,255,255,0.6)] rounded-[10px]'>
                <h1>Destination</h1>
                <p>Bangladesh,Sylhet</p>
              </div>

              <div className='p-[10px] bg-[rgba(255,255,255,0.6)] rounded-[10px]'>
                <h1>Passenger</h1>
                <p>1 Adults,3 children,1 pet</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Home