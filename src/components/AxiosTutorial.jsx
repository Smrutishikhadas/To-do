import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosTutorial() {
    const[userData , setData]= useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setData(response.data)
        })
    } 
    , [])
  return (
    <div className='app'>
      Axios Tutorial
     { userData.map((data)=>{
        return (
            <div>{data.name}</div>
        )
     })}
    </div>
  )
}

export default AxiosTutorial
 