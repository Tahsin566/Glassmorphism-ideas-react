import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Contact = () => {

  //For getting the dynamic part of the url

  const params = useParams()
  console.log(params);

  const [searchParams,setsearchParams] = useSearchParams()

  const search = searchParams.get('name')
  console.log(search);
  
  

  return (
    <>
    <div className='flex justify-center items-center h-[100vh]'>Contact of user {params.id}</div>

    {/* adds ...name=Tahsin&age=24 to the url of the current route/path */}
    <button onClick={()=>{
      setsearchParams({name:'Tahsin',age:24})}}>Change Url</button>
    </>
  )
}

export default Contact