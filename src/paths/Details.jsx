import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
  
  const location  = useLocation()
  
  const params = location.state.a

  return (
    <>
    <div className='flex justify-center items-center max-h-[100vh] gap-[10px] flex-col'>Details
    <div>{params}</div>
    </div>
    </>
  )
}

export default Details