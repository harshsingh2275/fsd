// import React from 'react'
import { useState } from 'react'
function clg() {
    const [name,setName]=useState("Sir Ji!!");
    function changeName(){
        setName("Shashwat Singh");
    }
    const[college,setCollege]=useState("ABES");
    function changeCollege(){
        setCollege("ABES ENGINEERING COLLEGE");
    }
  return (
    <div>
        <h2>{name}</h2>
        <h2>{college}</h2>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeCollege}>Change College</button>
    </div>
  )
}

export default clg