import React from 'react'
// import reacticon from '../assets/react.svg'

const Card = (props) => {
  return (
   <>
    <div className="card">
      <div className="top">
     <div className="icon">
      <img src="" alt="" />
      </div> 
      <div className="Save">
        <button className='btn'>Save <img src="" alt="" /></button>
      </div>
      </div>
      <div className="center">
           <h5>Amazon <span>5 days ago</span></h5>
           <h2>Senior UI/UX Designer</h2>
           <div className="part">
           <h4>Part-Time</h4>
                   <h4>Senior Level</h4>
                   </div>
                   </div>
                   <div className="bottom">
                    <div>
                      <div>
                        <h3>$120/hr</h3>
                        <p>Karachi , Pakistan</p>
                      </div>
                    </div>                 
                         <button>Apply Now</button>

                   </div>
                   </div>


    {/* <div className="card">
    <img src={props.img}  />
    <h3>{props.user},{props.age}</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nisi?</p>
     <button className='btn'>View Profile</button> 
     </div>    */}
   </>
  )
}

export default Card