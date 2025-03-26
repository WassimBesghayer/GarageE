import React from 'react'
import '../styling/band_0.css'

function Band_0() {
  return (
    <div className='band-0'>
        <div className='animated-bar'>
          <div className='nbr'>01</div>
          <div className='text-band-0'>
          <h5>Precision Tools</h5>
          <h2>Perfect Performance</h2>
          </div>
          <div className='icon-band-0'>
            <img className='' id='car-on-lift' src='/assets/car-tire-change.svg'/>
          </div>
        </div>

        <div className='animated-bar' id='second'>
          <div className='nbr'>02</div>
          <div className='text-band-0'>
          <h5>Smooth Rides</h5>
          <h2>Start with quality oil</h2>
          </div>
          <div className='icon-band-0'>
            <img className='' id='car-oil' src='/assets/change-car-oil.svg'/>
          </div>
        </div>

        <div className='animated-bar'>
          <div className='nbr'>03</div>
          <div className='text-band-0'>
          <h5>Turning Drivers</h5>
          <h2>Into happy customers</h2>
          </div>
          <div className='icon-band-0'>
            <svg id='smiley' xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
            </svg>
          </div>
        </div>

        <div className='animated-bar' id='fourth'>
          <div className='nbr'>04</div>
          <div className='text-band-0'>
          <h5 id='mo8t-0'>Sparkling Clean</h5>
          <h2>Inside & Out</h2>
          </div>
          <div className='icon-band-0'>
            <img className='' id='car-wash' src='/assets/car-wash.svg'/>
          </div>
        </div>
    </div>
  )
}

export default Band_0