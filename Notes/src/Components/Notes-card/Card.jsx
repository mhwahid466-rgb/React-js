import React, { useState } from 'react'
import { X } from 'lucide-react'

const Card = (e) => {
  const [title, setTitle] = useState('')
  const [deatial, setDeatial] = useState('')
  const [task, setTask] = useState([])

  const Submithandler = (e) => {
    const copyTask = [...task]
    copyTask.push({ title, deatial })
    setTask(copyTask)

    e.preventDefault()

    setTitle('')
    setDeatial('')

  }
  const notedelet = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  return (
    <>
      <div className='bg-black  lg:flex text-white '>
        <form className='flex gap-4 lg:w-1/2 flex-col items-start p-10'
          onSubmit={(e) => {
            Submithandler(e)
          }}>
          <h1 className='text-4xl font-bold'> Notes</h1>
          <input type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium  py-2  border-2 outline-none rounded' />

          <textarea type='text'
            value={deatial}
            onChange={(e) => {
              setDeatial(e.target.value)
            }}
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded '
            placeholder='Write Details' />
          <button className='bg-white active:bg-gray-200 active:scale-95 cursor-pointer font-medium w-full outline-none text-black px-5 py-1.5 rounded'>
            Add Note
          </button>
        </form>
        <div className=' px-7 py-7 lg:w-1/2 border-l-2 '>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>
          <div className="flex flex-wrap items-start justify-start gap-3 mt-5 h-[80vh] overflow-y-auto hide-scrollbar">
            {
              task.map(function (elem, idx) {
                return <div key={idx} className="relative h-55 w-43 rounded-2xl bg-cover text-black px-2 py-9 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">                      
                  <h3 className=' text-center leading-tight text-xl font-medium'>{elem.title}</h3>
                  <p className=' mt-2 leading-tight font-medium py-1 text-zinc-400'>{elem.deatial}</p>
                  <button onClick={() => {
                    notedelet()
                  }}
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Card