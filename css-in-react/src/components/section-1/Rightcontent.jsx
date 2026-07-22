import React from 'react'
import Card from './Card'
const Rightcontent = (props) => {
  return (
    <>
    <div className='h-full overflow-x-auto w-3/4 p-2 flex flex-nowarp gap-10'>
    {props.users.map(function(elem, index){
  return (
    <Card
      key={index}
      img={elem.img}
      tag={elem.tag}
      color={elem.color}
      intro={elem.intro}
    />
  )
})}
    </div>
  </>
  )
}

export default Rightcontent