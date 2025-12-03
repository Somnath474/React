import React, { useState } from 'react'

const App = () => {
const [title, settitle] = useState('')
const [detail, setdetail] = useState('')

const [task, settask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault(e);
    

    const copyTask=[...task];
    
    copyTask.push({title,detail})
    
    settask(copyTask)
    console.log(copyTask);

    settitle('')
    setdetail('')

    
    }
    const deleteNote=(idx)=>{
      const copyTask=[...task];
      copyTask.splice(idx,1)
      settask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={submitHandler} className='gap-4 p-10 lg:w-1/2 flex-col flex  items-start   '>
      
      <h1 className='text-3xl font-bold'>Your Notes</h1>
       
          <input type="text"
         placeholder='Enter Notes Heading' 
         className='px-5 w-full py-2 border-2 rounded outline-none' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
         />  


        <textarea type="text"
         placeholder='Write details'
          className='px-5 h-32 font-medium  w-full py-2 border-2 rounded outline-none' 
          value={detail}
          onChange={(e)=>{
            setdetail(e.target.value)
          }}
          />
         <button  className= ' active:bg-gray-400 active:scale-95 font-medium bg-white text-black px-5 py-5 w-full rounded outline-none'>Add</button>

          </form>
    <div className='lg:w-1/2 lg:border-l-2 p-10'>
    <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex  flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto '>
        {task.map(function(elem,idx){

          return <div key={idx}  className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
            <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
           
              </div> 
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 active:bg-red-500 bg-red-600 text-white py-1 text-xs rounded font-bold '>Delete</button>
              </div>
        })}
      </div>
    </div>
    </div>
  )
}


export default App
