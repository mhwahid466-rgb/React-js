import React from 'react'
// import {ArrowUpRight} from 'lucide-react' 
import Arrow from './Arrow'
import Herotext from './Herotext'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
       <Herotext/>
        <Arrow/>
    </div>

   
  )
}

export default Leftcontent