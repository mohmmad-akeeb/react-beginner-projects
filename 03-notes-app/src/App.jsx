import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    let copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)

    console.log(task)

    setTitle('')
    setDetails('')
  }

  const titleHandler = (e) =>{
    setTitle(e.target.value)
  }

  const detailsHandler = (e) =>{
    setDetails(e.target.value)
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='min-h-svh lg:flex bg-black text-white'>
      <form 
        onSubmit={(e) => {
          submitHandler(e)
        }} 
        className='flex gap-4 lg:w-1/2 flex-col items-start p-10'
      >
        <h1 className='text-xl font-bold'>Add Notes</h1>
        <input
          onChange={(e) => {
            titleHandler(e)
          }}
          type="text"
          value={title}
          placeholder='Enter Nots Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        />
        <textarea
          onChange={(e) => {
            detailsHandler(e)
          }}
          value={details}
          type="text"
          placeholder='Enter Details'
          className='px-5 w-full font-medium h-32 py-2 flex-start flex-row border-2 outline-none rounded'
        />
        <button className='bg-white w-full text-black rounded px-5 py-2'>Add Notes</button>
      </form>
      <div 
        className='lg:w-1/2 lg:border-l-2 p-10'
      >
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap mt-5 h-full overflow-auto justify-start'>
          {task.map((elem,idx)=>{
            return (
            <div key={idx} className="flex justify-between flex-col item-start relative h-52 bg-cover w-40 py-8 pb-4 px-4 text-black  rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold mt-2'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete Note</button>
            </div>)
          })}
          
          
        </div>
      </div>
    </div>
  )
}

export default App
