
import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {

  const location = useLocation()

  const p = location.state.a

  console.log(p);
  
  
  const comments = [
    {name:'Tahsin',age:24,comments:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus. Officiis, eius.'},
    {name:'Tuhin',age:21,comments:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus. Officiis, eius.'},
    {name:'Badar',age:23,comments:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus. Officiis, eius.'}
  ]



  return (
    <div className='flex justify-center items-center h-[100vh] gap-[10px] flex-col'>
      <div>{comments[p].name}</div>
      <div>{comments[p].age}</div>
      <div className='w-[300px] text-center'>{comments[p].comments}</div>
    </div>
  
  )
}

export default About