import React from 'react'
import {ArrowRight} from 'lucide-react'

const Cardcontent = (props) => {
// console.log(props.tag)
  return (
    <><div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between bg-black/30">
        <h2 className="bg-white text-2xl font-bold rounded-full flex justify-center items-center w-10 h-10">
          1
        </h2>
    
        <div>
          <p className="leading-normal mb-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            optio sed asperiores facere, nobis cum.
          </p>
    
          <div className="flex justify-between items-center">
            <button style={{backgroundColor:props.color}} className=" text-white px-6 py-2 rounded-full">
            {props.tag},
            </button>
    
            <button className="bg-blue-600 text-white p-3 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div></div></>
  )
}

export default Cardcontent