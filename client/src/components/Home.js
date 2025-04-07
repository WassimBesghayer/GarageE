import React from 'react'
import Explore_Services from './home_comps/Explore_Services'
import Charts from './dashboard/Charts'
import Band_0 from './home_comps/Band_0'
import Pricing from './home_comps/Pricing'
import Marquee_comp from './home_comps/Marquee_comp'
import Procedure from './home_comps/Procedure'
import Milestone from './backOffice_comps/Milestone'
import Opinions from './home_comps/Opinions'
import Band_1 from './home_comps/Band_1'
import Training from './home_comps/training'



function Home() {
  return (
    <div className='Home-Core'>
    <section className='section1'></section>
    <section classname="section2" style={{display: "flex",
    justifyContent:" space-around",
    backgroundColor: "transparent",
    position: "absolute",
    top: "168px",
    left: "0px",
    width:"100%", color:"white"}}>
    <div className='description' style={{width:"50%", padding:"58px"}}>
      <h3 >Your Car’s Care </h3>
      <h1 style={{fontSize:"54px"}}>
      Your Trusted Partner for Every Journey
      </h1>
      <p>Maecenas tellus leo, ornare at elit ut, rutrum commodo nisl. Nam posuere lacus lobortis nibh rhoncus egestas. Morbi at leo id libero elementum euismod ac sodales eros. Vestibulum in porttitor dui. Quisque gravida laoreet pharetra</p>
      <button>GET FREE ESTIMATE</button>
    </div>

    <div style={{width:"50%", padding:"50px"}}>
        <div style={{backgroundColor:"red", height:"384px", borderRadius:"50% 0"}}>

        </div>
        <img src='https://karimotors.wpengine.com/wp-content/uploads/2024/09/Slider-Main-Images01.png'
          style={{position:"absolute", top: "115px", right: "96px", width: "46%"}}/>
    </div>
    </section>
    
        <Band_0/>
        <video autoPlay="" loop="" muted="" playsInline="" controls>
          <source src='/assets/Commercial Ads.mp4' type='video/mp4'/>
          Your browser doesn't support the video tag !
        </video> 
        <Explore_Services/>
        <Band_1/>
        <Marquee_comp/>
        <Training/>
        <Procedure/>
        <Pricing/>
        <Opinions/>
       
       
        <Charts/>
        <Milestone/>
      
    </div>
  
  )
}

export default Home