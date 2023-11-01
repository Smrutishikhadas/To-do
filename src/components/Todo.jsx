import React, { useState } from 'react'

function Todo() {
  const [activity , setActivity] = useState("")
  const [listData , setListData] = useState([])

  const AddActivity = () =>{
      // setListData([...listData , activity])
      // console.log(listData)
      setListData((listData)=>{const updatedList = [...listData, activity]
        setActivity('');
        console.log(updatedList)
        return updatedList}) 
  }
  const RemoveActivity =(i)=>{
    const updatedListData = listData.filter((element , id)=>{
      return i!=id;
    })
    setListData(updatedListData)
  }
  return (
    <>
      <div className='container'>
        <div className='header'> TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button className="button"onClick={AddActivity}>Add</button>
        <p className='list-heading'>Here is your List :{")"}</p>
        {listData!=[] && listData.map((data, i)=>{
          return(
          <>
          <p key={i}>
          <div className='listData'>{data}</div>
          <div >
            <button className='btn-position' onClick={()=>{RemoveActivity(i)}}>Remove</button>
          </div>
          </p>
          </>
          )
        })}
        {listData.length>=1 && <button className='btn-remove' onClick={()=>{setListData([])}}>RemoveAll</button>}
      </div>
    </>
  )
}

export default Todo
