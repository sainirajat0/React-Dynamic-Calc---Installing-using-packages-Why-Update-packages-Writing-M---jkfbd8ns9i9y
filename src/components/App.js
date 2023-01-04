import React,{useState,useEffect} from 'react'
import Result from './Result';
import '../styles/App.css';

const App = () => {

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  
  return (
    <div id="main">
      <input id='input1' onChange={(e) => setInput1(e.target.value)}/>
       +
       <input id='input2' onChange={(e) => setInput2(e.target.value)}/> 

      {/* <Result num1 = {input1}  num2 = {input2}/> */}
      <Result num1 = {Number(input1)}  num2 = {Number(input2)}/>
    </div>
  )
}


export default App;
