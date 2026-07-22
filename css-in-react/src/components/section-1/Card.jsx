import React from 'react'
import  Cardcontent from './Cardcontent'
const Card = (props) => {
  return (
    <>
    <div className="h-full shrink-0 w-55 overflow-hidden relative rounded-4xl">
  <img
    className="h-full w-full object-cover"
  src={props.img}
  />
<Cardcontent
  tag={props.tag}
  color={props.color}
  intro={props.intro}
/>
  </div>
  

    </>
    
  )
}

export default Card