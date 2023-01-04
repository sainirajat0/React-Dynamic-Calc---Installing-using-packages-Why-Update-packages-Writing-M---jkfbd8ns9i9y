import React,{useState,useEffect} from 'react'
import '../styles/App.css';

const Result = ({num1,num2}) => {

    return(
       
        <p id='result'>{num1 + num2}</p>
    )
}


export default Result;