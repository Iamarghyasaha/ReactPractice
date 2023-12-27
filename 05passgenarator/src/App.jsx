/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState,useCallback,useEffect } from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [symbolAllowed,setsymbolAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(symbolAllowed){
      str += "!@#$%^&*()_+";
    }
    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length+1));
    }
    setPassword(pass);
  },[length,numberAllowed,symbolAllowed,setPassword])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,symbolAllowed,passwordGenerator])
  return (
    <>
     
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-700">
        <h1 className='text-white text-center m-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Your Password'
            readOnly
          />
          <button 
          className='outline-none bg-blue-500 text-white px-3 py-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 ml-4'>
            <input 
            type='range'
            min ={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-white mr-2'>Length: {length}</label>
            </div>
            <div className='flrx items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              />
              <label className='ml-1 text-white mr-2'>Numbers</label>
            </div>
            <div className='flrx items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={symbolAllowed}
                onChange={()=>{setsymbolAllowed((prev)=>!prev)}}
              />
              <label className='ml-1 text-white'>Symbols</label>
            </div>
        </div>
     </div>
    </>
  )
}

export default App