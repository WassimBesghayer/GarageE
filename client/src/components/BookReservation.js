import React from 'react'
import "./Book.css"
function BookReservation() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", }}>
        <div>
<h1>Book an appointment</h1>
<div className="tab">
<div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
    <input type='text' placeholder="Enter you Full Name"/>
    <input type='text' placeholder="Enter your phone Number"/>
</div>
<div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
    <input type='email' placeholder="Enter you  Email"/>
    <input type='text' placeholder="Enter you Car Model"/>
</div>
<div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
    <input type='text' placeholder="Enter you Matricule"/>
    <input type='text' placeholder="Enter you Panne"/>
</div>
<div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
    <textarea placeholder='Enter more details'></textarea>
   
</div>
<div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
   <button>Book</button>
   
</div>
</div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default BookReservation