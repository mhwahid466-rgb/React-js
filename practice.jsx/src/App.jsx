import React from 'react'
import Card from './Components/Card';

const App = () => {
  return (
  
    <>
    {/* <Card /> */}
    <div className="main">
    <Card user = "Kashan" age ={28} img ="https://media.istockphoto.com/id/2246136302/photo/sunset-at-poipu-beach-on-the-south-side-of-kauai-hawaii.webp?a=1&b=1&s=612x612&w=0&k=20&c=F43nLQ5iQXpMSF2Mf322XVlnSmAsTjWsNBh_RFSVDgI=" />
    <Card user ="Usman " age ={21} img ="https://images.unsplash.com/photo-1562860149-691401a306f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFja2VyfGVufDB8fDB8fHww" />
    <Card user ="Mustaf Hassan"age ={16} img ="https://images.unsplash.com/photo-1645976417695-e76bf772b1bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwyMTU3MTI1fHxlbnwwfHx8fHw%3D"  />
    <Card user ="Ahmed"age ={12} img = "https://images.unsplash.com/photo-1596550782892-01e5f0229ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c2t8ZW58MHx8MHx8fDA%3D" />
    </div>
        </>
  )
}

export default App