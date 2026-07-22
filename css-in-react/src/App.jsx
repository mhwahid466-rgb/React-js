import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Section1 from './components/section-1/Section1'

function App() {
const users =[
  {
    img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro :'',
    color : 'darkslategray',
    tag :' Satisfied'
  },
   {
    img : "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro :'',
    color : 'lightseagreen',

    tag :'UnderServe'
  }, {
        img : "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    intro :'',
    color : 'pink',

    tag :'UnderBand'

  }
  , {
   img : 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro :'',
    color : 'black',
    tag :'Under'
    
  }
]
function btn (){
  console.log('hello')
}
return( 
  <>
 <Section1 users ={users}/>
   
 </>
  )
}

export default App
