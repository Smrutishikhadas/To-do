import React, { useState } from 'react'

function Child(props) {
const [name , setName] = useState("Smruti")
const handleSubmit = (e)=>{
    e.preventDefault()
    props.getData(name)
}
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </form>
    </>
  )
}

export default Child
