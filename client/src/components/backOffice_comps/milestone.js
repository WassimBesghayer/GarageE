import React from 'react'
import '../styling/procedure.css'

export default function Procedure() {

  return (
    <div className='Core-Procedure'>
        <h3>Understand Our Procedure</h3>
        <h1>Acquaint Yourself with Our Process</h1>
        <div className='container-procedure'>
            <div className='container-chrono'>
                
            </div>
            <div className='container-text'>
                <section className='1st-sec'>
                
                    
                    <h3>01 Appointment scheduling</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nostrum dicta rerum ipsum! Velit.</p>
                </section>

                <section className='2nd-sec'>
                    
                    <h3>02 Initial inspection</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nostrum dicta rerum ipsum! Velit.</p>
                </section>

                <section className='3rd-sec'>
                    
                    <h3>03 Proper repairs</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nostrum dicta rerum ipsum! Velit.</p>
                </section>

                <section className='4th-sec'>
                
                    <h3>04 Final touch</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nostrum dicta rerum ipsum! Velit.</p>
                </section>
            </div>
            <img id='photo-procedure' src='https://karimotors.wpengine.com/wp-content/uploads/2024/08/Process-Block-03.jpg'/>
        </div>
    </div>
  )
}