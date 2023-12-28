import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength] = useState(12);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [symbolAllowed,setsymbolAllowed] = useState(false);
  const [password,setPassword] = useState("");
  //useRef hook
  const passRef = useRef("");
// callBack used is used for memoization of function (optimizing through caching function reference) 
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

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    // for selecting specific range
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  },[password])
// when ever the [dependencies] touched useEffect trigger the function
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,symbolAllowed,passwordGenerator])

  return (
    <>
    <h1 className='w-full flex flext-wrap justify-center font-bold text-white text-grey-700 mt-12 text-4xl'
    >Welcome, Genarate Your Customized Password </h1>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-700">
        <h1 className='text-white text-center m-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 font-bold'
            //placeholder='Your Password'
            readOnly
            ref={passRef}
          />
          <button 
          className='outline-none bg-blue-500 text-white px-3 py-3 shrink-0 hover:bg-sky-700'
          onClick={()=>copyPassword()}
          >Copy</button>
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
     <div className= "flex justify-center gap-x-1 ml-4">
          <input 
          className='rounded-md w-2/6 p-5'
          type='text' placeholder='Clipboard'></input>
     </div>
    </>
  )
}

export default App
