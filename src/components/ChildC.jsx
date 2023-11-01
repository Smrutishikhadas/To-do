// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { data,data1 } from '../App'

// useContext Hook - create, provider , useContext
function ChildC() {
  const myname = useContext(data)
  const myage = useContext(data1)
  return (
    <div>
      <h1> Hello my name is {myname} and my age is {myage}.</h1>
    </div>
  )
}

export default ChildC
