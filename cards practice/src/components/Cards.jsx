import React from 'react'
import {Bookmark} from 'lucide-react'
import './index.css'


const Cards = (props) => {
  console.log(props.companyName )
  return (
   <>
    <div className="card">
      <div className="top">
     <div className="icon">
      <img className='img' src={props.brandLogo}/>
      </div>
      <div className="Save">
        <button className='btn'>Save <Bookmark size={17} /></button>
      </div>
      </div>
      <div className="center">
           <h5>{props.companyName} <span>{props.datePosted}</span></h5>
           <h2>Senior UI/UX Designer</h2>
           <div className="part">
           <h4>{props.tag1}</h4>
                   <h4>{props.tag2}</h4>
                   </div>
                   </div>
                   <div className="bottom">
                    <div>
                      <div>
                        <h3>{props.payPerHour}</h3>
                        <p>{props.location}</p>
                      </div>
                    </div>                 
                         <button>Apply Now</button>

                   </div>
                   </div>



   </>
  )
}

export default Cards;