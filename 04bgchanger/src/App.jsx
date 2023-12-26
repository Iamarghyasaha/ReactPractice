import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className= "w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className="outline-none p-2 text-white rounded-xl"
            onClick={()=>setColor("red")}
            style={{backgroundColor:"red"}}
            >Red</button>
            <button className="outline-none p-2 text-white rounded-xl"
            onClick={()=>setColor("green")}
            style={{backgroundColor:"green"}}
            >Green</button>
            <button className="outline-none p-2 text-white rounded-xl"
            onClick={()=>setColor("blue")}
            style={{backgroundColor:"blue"}}
            >Blue</button>
            <button className="outline-none p-2 text-white rounded-xl"
            onClick={()=>setColor("black")}
            style={{backgroundColor:"Black"}}
            >Black</button>
            <button className="outline-none p-2 text-white rounded-xl"
            onClick={()=>setColor("purple")}
            style={{backgroundColor:"purple"}}
            >Purple</button>
            <button className="outline-none p-2 text-black rounded-xl border-2 border-black-600"
            onClick={()=>setColor("white")}
            style={{backgroundColor:"white"}}
            >White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
