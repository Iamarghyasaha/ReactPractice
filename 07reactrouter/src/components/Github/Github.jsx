/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/Iamarghyasaha`)
        .then((res)=>res.json())
        .then((data)=> setData(data))
    },[])
  return (
    <>
        <div className='text-center text-2xl font-bold bg-gray-200 m-4 text-black w-full h-screen'>
            GitHub
            <div className="flex justify-center items-center mt-5">
                    <img src={data.avatar_url} alt="Git picture" width={400} />
            </div>
            <div className='text-sm font-normal mt-3'>Bio : {data.bio}</div>
            <div className='text-2xl mt-3'>Location : {data.location}</div>
            <div className='text-2xl mt-3'>Active Repositories : {data.public_repos}</div>
            <div className='text-2xl mt-3'>Followers : {data.followers}</div>
        </div>
        
    </>
  )
}

export default Github