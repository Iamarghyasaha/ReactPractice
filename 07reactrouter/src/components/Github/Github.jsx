/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch(`https://api.github.com/users/Iamarghyasaha`)
        .then((res)=>res.json())
        .then((data)=> setData(data))
    },[Github])
  return (
    <>
        <div className='text-center bg-gray-200 text-black w-full h-screen mb-4'>
            GitHub
            <div className="flex justify-center items-center">
                    <img src={data.avatar_url} alt="Git picture" width={400} />
            </div>
            <div>{data.public_repos}</div>
        </div>
        
    </>
  )
}

export default Github