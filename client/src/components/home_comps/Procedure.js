import React from 'react'
import '../styling/procedure.css'

function Procedure() {
  return (
   
    <div className='Core-Timeline'>
        <>
    <h1>Understand Our Procedure</h1>
  <h2>Acquaint Yourself with Our Process</h2>
  <div className="timeline">
    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
      <div className="timeline__event__icon ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{position: 'absolute', width: '40px'}}><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
        <i className="lni-cake" />
      </div>
      <div className="timeline__event__date"><img id='proc-one' src='https://www.cvfht.ca/FHTfolders.php?df=640'/></div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">01 Appointment scheduling</div>
        <div className="timeline__event__description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
            Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis
            incidunt reprehenderit accusantium id aut architecto harum quidem
            dolorem in!
          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
      <div className="timeline__event__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: 'absolute', width: '40px'}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
        <i className="lni-burger" />
      </div>
      <div className="timeline__event__date" ><img id='proc-two' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJBUJG6gGFhVA2QRiuc5yZYGb9PR5jZqmzw&s'/></div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">02 Initial inspection</div>
        <div className="timeline__event__description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
            Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis
            incidunt reprehenderit accusantium id aut architecto harum quidem
            dolorem in!
          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
      <div className="timeline__event__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: 'absolute', width: '40px'}}><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        <i className="lni-slim" />
      </div>
      <div className="timeline__event__date"><img src='https://www.armotors.ae/wp-content/uploads/2021/03/mechanical-electrical-repairs-armotors-1.jpg'/></div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">03 Proper repairs</div>
        <div className="timeline__event__description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
            Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis
            incidunt reprehenderit accusantium id aut architecto harum quidem
            dolorem in!
          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp timeline__event--type1">
      <div className="timeline__event__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{position: 'absolute', width: '40px'}}><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <i className="lni-cake" />
      </div>
      <div className="timeline__event__date"><img src='https://lirp.cdn-website.com/7b51853d/dms3rep/multi/opt/Vehicle+Inspection-640w.png'/></div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">04 Validation</div>
        <div className="timeline__event__description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
            Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis
            incidunt reprehenderit accusantium id aut architecto harum quidem
            dolorem in!
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Procedure