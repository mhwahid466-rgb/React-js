import React, { lazy, useEffect, useState } from 'react'
import axios from 'axios'
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

const Gallery = () => {

  const [userdata, setUserdata] = useState('')
  const [index, setIndex] = useState(2)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
    console.log('data agya bala bala', response.data)
    setUserdata(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-zinc-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    Loading...</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return <a href={elem.url} target='blank'> 
      <div key={idx}
       className='h-50 w-73  overflow-hidden bg-zinc-100 rounded-xl '>
        <img
          className='h-full w-full object-fill rounded-xl'
          src={elem.download_url} alt=""
          loading="lazy"
        />
      </div>
      </a>
    })
  }

  return (
    <>
      <div className='min-h-screen'>
         <Navbar/>
        <div className="px-8 pt-17 pb-4">
          <h1 className="leading-tight font-bold text-3xl text-zinc-900">
            Image Gallery
          </h1>
          <p className="text-zinc-500 mt-1">
            Beautiful images fetched from an API
          </p>
        </div>
        <div className='flex justify-center items-center py-4 gap-4 '>
          <button onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserdata([])
            }
          }
          } className={`${index === 1 ? "bg-blue-500 text-white cursor-not-allowed py-2 px-7 rounded-xl opacity-70"
            : " bg-blue-500 text-white py-2 px-7 rounded-xl cursor-pointer active:scale-95"} flex items-center gap-2`}> 
             <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />Prev</button>
          <h4 className='text-zinc-800'>Page{index}</h4>
          <button onClick={() => {
            setIndex(index + 1)
            setUserdata([])
          }
          } className='py-2 px-7 bg-blue-500 text-white  rounded-xl cursor-pointer active:scale-95 flex items-center gap-2'> 
          Next   <ArrowRight className="w-5 h-5" strokeWidth={2.5} /></button>
        </div>
        <div className=' scroll-smooth overflow-y-auto no-scrollbar flex h-[80%] flex-wrap gap-4 px-4 py-4 '>
          {
            printUserData
          }
        </div>
      </div>
    </>
  )
}

export default Gallery 