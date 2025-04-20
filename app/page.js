"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1);
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length > 0){
  renderTask = mainTask.map((t, i) => {
    return<li key={i} className='flex items-center justify-between mb-5'> 
      <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2x1 font-semibold'>{t.title}</h5>
      <h6 className='text-x1 font-median'>{t.desc}</h6>
    </div>
    <button onClick={() => {
      deleteHandler(i)
    }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
  })
}

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Hemant's Todo List</h1>
      <form onSubmit={submitHandle}>
        <input type='text' placeholder='Enter Task Here' value={title} onChange={(e) =>{settitle(e.target.value)}} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' />

        <input type='text' placeholder='Enter Description Here' onChange={(e) => {setdesc(e.target.value)}}  className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' />

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
      </form>
       <hr />

       <div className='p-8 bg-blue-600'>
         <ul>
          {renderTask}
         </ul>
       </div>
      </>
  )
}

export default page

   