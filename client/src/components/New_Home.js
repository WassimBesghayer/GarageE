import React from 'react'
import Explore_Services from './home_comps/Explore_Services'

function New_Home() {
  return (
    <div>
    <section className='section1'>
       
    </section>
      <section classname="section2" style={{display: "flex"
,
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
            <img src='https://karimotors.wpengine.com/wp-content/uploads/2024/09/Slider-Main-Images01.png'  style={{position:"absolute",top: "115px",
    right: "96px",
    width: "46%"}}/>
        </div>
        </section>
    
        <section className='band-0'>
        <div className='animated-bar'>
          <h5>Precision Tools</h5>
          <h2>Perfect Performance</h2>
        </div>
        <div className='animated-bar'>
          <h5>Smooth Rides</h5>
          <h2>Start with quality oil</h2>
        </div>
        <div className='animated-bar'>
          <h5>Turning Drivers</h5>
          <h2>Into happy customers</h2>
        </div>
        <div className='animated-bar'>
          <h5>Sparkling Clean</h5>
          <h2>Inside & Out</h2>
        </div>
      </section>
        <Explore_Services/>
    </div>
  
  )
}

export default New_Home