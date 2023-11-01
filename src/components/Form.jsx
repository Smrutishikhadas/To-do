import React, { useEffect, useState } from 'react'

function Form() {
  const data = {name:"",email:"",password:""}
  const [inputData , setInputData]= useState(data)
  const [flag , setFlag] = useState(false)
  useEffect(()=>
    {console.log("Registered")} 
  , [flag])
  const handleData = (e)=>{
    setInputData({...inputData , [e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!inputData.name ||!inputData.email ||!inputData.password){
      alert("All Fields are Required!")
    }
    else{
      setFlag(true)
    }
  }
  return (
    <>
    <pre>{(flag)? <h2 className='ui-define'> Hello , {inputData.name} , You have resgistered Successfully!</h2> :""}</pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1> Registration Form</h1>
        </div>
        <div>
          <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
          <input type='text' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
          <input type='text' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <button className='button' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
