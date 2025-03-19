import React from 'react'
import {useState} from "react"
import "./App5.css"
export default function App5() {
    const [count,setCount]=useState(0);
    const fun = () => {
        setCount(count+1)
    };
  return (
    <div className="container">
        <div>
        <p>{count}</p>
        <button onClick={fun}>Click</button>
        </div>
    </div>
  )
}
