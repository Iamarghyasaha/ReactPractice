import { useState } from "react";
import "./App.css"
function App() {
  const currentdate = new Date();
  console.log(currentdate);
  const [num, setnum ]= useState(0) 
  // num is variable,setnum is method num is current state and setnum is the updated State

const addValue=()=>{
  //console.log("Clicked",Math.random)
  if(num<20){
    setnum(num +1)
    setnum(prev => {return prev +1})
    setnum(prev =>  prev +1)
    
  }
  
}
const subValue=()=>{
  if(num>0){
    setnum(num - 1 )
  }
}
  return (
    <>
    <div id="main">
      <span>Counter Value: {num}</span>
      <button onClick={addValue}>Add value</button> &nbsp;
      <button onClick={subValue}>Decrease Value</button>
      <span>{currentdate.getUTCMonth()}</span>
    </div>
    </>
  )
}
export default App
