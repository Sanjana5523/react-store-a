import React from 'react'
import {useState} from "react"
export default function App7() {
    const [hobby,setHobby]=useState([]);
        const [text,setText]=useState();
        const handleSubmit=()=>{
            setHobby([...hobby,text]);
        };
  return (
    <div>
        <h3>Super Market</h3>
        <p><input type="text" placeholder="Item Name" onChange={(event)=>setText(event.target.value)}></input></p>
        <p><input type="number" placeholder="Price" onChange={(event)=>setText(event.target.value)}></input></p>
        <p><input type="number" placeholder="Quantity" onChange={(event)=>setText(event.target.value)}></input></p>
        <button onClick={handleSubmit}>Add</button>
    <hr></hr>
    <p>{hobby}</p>
    </div>
  )
}
