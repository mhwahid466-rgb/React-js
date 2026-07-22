import React from 'react'
import Rightcontent from './Rightcontent' 
import Leftcontent from './Leftcontent'
const Pag1content = (props) => {
  return (
    <div className=' gap-10 h-[85vh] flex items-center justify-between py-5 px-18'>
         <Leftcontent/>
        <Rightcontent users ={props.users}/> 
    </div>
  )
}

export default Pag1content