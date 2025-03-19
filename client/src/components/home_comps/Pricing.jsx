import React from 'react'
import '../styling/pricing.css'
import Shifting_Switch from './Shifting_Switch'

function Pricing() {
  return (
    <div className='Core-Pricing'>
        <h2>Economical Pricing Tiers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam recusandae non eaque accusamus magni distinctio accusantium.</p>
        <div className='prx-choice'>
              
            <h1>Trimesterly</h1>
            <Shifting_Switch/>
            <h1>Yearly</h1>
        </div>
        
        <section className='pricing-cards'>
        <div className='prx-card' id='casual'>
                <h1>Casual</h1>
                <h3>5$</h3><br/>
                <p>Payment dpends on the interventions done</p>
                <hr/>
                <br/><br/><br/><br/>
                <p>Further actions may be requested by the customer at any time, while his vehicle at our workshop.</p>
                <br/><br/><br/><br/>
                <hr/>
                <button id='btn_casual'>Book a reservation</button>
            </div>

            <div className='prx-card' id='standard'>
                <h1>Standard</h1>
                <h3>75$</h3>
                <br/>
                <p>Necessary & Basic actions required to keep your car rolling !</p>
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M54.52,28.58a1,1,0,0,0,1.36.32,1,1,0,0,0,.32-1.35L53.43,23a1,1,0,0,0-1-.46l-20.95,5-3.09-3.1a1.72,1.72,0,0,0-.78-.19H19.27V20.14h3.09a1,1,0,1,0,0-1.93H14.24a1,1,0,0,0,0,1.93h3.1V24.2H9.86a1,1,0,0,0-1,1v.32A5.49,5.49,0,0,0,5.41,24.2,5.42,5.42,0,0,0,5.41,35a5.26,5.26,0,0,0,3.48-1.29v5.8a1,1,0,0,0,1,1h27A.86.86,0,0,0,37.7,40l6.77-13.47a.06.06,0,0,1,.06-.06l7.54-1.81ZM5.48,33A3.46,3.46,0,0,1,2,29.55a3.41,3.41,0,0,1,3.48-3.42,3.45,3.45,0,1,1,0,6.9Zm30.87,5.54H10.83V26.13H27.2l3.22,3.23a1,1,0,0,0,.9.25L42.15,27Z"></path><path d="M55.81,30.52c-2.77,0-4.19,5.28-4.19,7.08a4.19,4.19,0,1,0,8.38,0C60,35.8,58.58,30.52,55.81,30.52Zm0,9.34a2.28,2.28,0,0,1-2.25-2.26c0-1.8,1.48-5.15,2.25-5.15s2.26,3.35,2.26,5.15A2.24,2.24,0,0,1,55.81,39.86Z"></path></svg></td>
                            <td><p>Change Oil</p></td>
                        </tr>
                        <tr>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M45,47.25h.39a2.3,2.3,0,0,0,2.3-2.3V16a2.3,2.3,0,0,0-2.3-2.27H45a2.3,2.3,0,0,0-2.31,2.3V45A2.3,2.3,0,0,0,45,47.25ZM43.89,16A1.11,1.11,0,0,1,45,15h.39a1.1,1.1,0,0,1,1.1,1.1h0V45a1.1,1.1,0,0,1-1.1,1.1H45A1.11,1.11,0,0,1,43.89,45Z"></path><path d="M15,47.25A2.3,2.3,0,0,0,17.31,45V16A2.3,2.3,0,0,0,15,13.77h-.39a2.3,2.3,0,0,0-2.3,2.3V45a2.3,2.3,0,0,0,2.3,2.3ZM13.51,45V16A1.11,1.11,0,0,1,14.61,15H15a1.11,1.11,0,0,1,1.11,1.1V45A1.11,1.11,0,0,1,15,46.05h-.39a1.1,1.1,0,0,1-1.1-1.1Z"></path><path d="M22.18,47.25h.39A2.3,2.3,0,0,0,24.88,45V16a2.3,2.3,0,0,0-2.28-2.27h-.42a2.3,2.3,0,0,0-2.3,2.3V45A2.3,2.3,0,0,0,22.18,47.25ZM21.08,16A1.11,1.11,0,0,1,22.18,15h.39a1.11,1.11,0,0,1,1.11,1.1V45a1.11,1.11,0,0,1-1.11,1.1h-.39a1.1,1.1,0,0,1-1.1-1.1h0Z"></path><path d="M29.81,47.25h.38A2.3,2.3,0,0,0,32.5,45V16a2.3,2.3,0,0,0-2.31-2.27h-.38a2.3,2.3,0,0,0-2.31,2.3V45A2.3,2.3,0,0,0,29.81,47.25ZM28.7,16A1.09,1.09,0,0,1,29.81,15h.38a1.11,1.11,0,0,1,1.11,1.1V45a1.11,1.11,0,0,1-1.11,1.1h-.38A1.11,1.11,0,0,1,28.7,45h0Z"></path><path d="M37.4,47.25h.42a2.3,2.3,0,0,0,2.3-2.3V16a2.3,2.3,0,0,0-2.3-2.27h-.39a2.3,2.3,0,0,0-2.31,2.3V45A2.3,2.3,0,0,0,37.4,47.25ZM36.3,16A1.1,1.1,0,0,1,37.4,15h.42a1.1,1.1,0,0,1,1.1,1.1h0V45a1.1,1.1,0,0,1-1.1,1.1h-.39A1.11,1.11,0,0,1,36.32,45Z"></path><path d="M56.49,10.16H47.15V7.84a.6.6,0,0,0-.6-.6H40.22a.6.6,0,0,0-.6.6v2.32H20.38V7.84a.6.6,0,0,0-.6-.6H13.45a.6.6,0,0,0-.6.6v2.32H9.38V6.85a.6.6,0,0,0-.6-.6H5.62a.6.6,0,0,0-.6.6v3.31H4.68a3.55,3.55,0,0,0-3.54,3.51V28.92a3.55,3.55,0,0,0,1.57,2.95,2.28,2.28,0,0,1,1,1.94V48.14a2.74,2.74,0,0,0,2.73,2.72h6.37v2.29a.6.6,0,0,0,.6.6h6.33a.6.6,0,0,0,.6-.6V50.86h6.55v1a1.85,1.85,0,0,0,1.86,1.85H31.2a1.85,1.85,0,0,0,1.85-1.85h0v-1h6.57v2.29a.6.6,0,0,0,.6.6h6.33a.6.6,0,0,0,.6-.6V50.86h9.34a2.4,2.4,0,0,0,2.37-2.37v-36A2.37,2.37,0,0,0,56.49,10.16ZM40.82,8.44h5.12v1.72H40.82Zm-26.77,0h5.13v1.72H14.05Zm-7.82-1h2v2.71h-2ZM5,48.14V33.81a3.52,3.52,0,0,0-1.58-2.94,2.36,2.36,0,0,1-1-1.95V13.67a2.34,2.34,0,0,1,2.34-2.31h3.5v38.3H6.48A1.52,1.52,0,0,1,5,48.14ZM9.38,11.36H50.62v38.3H9.38Zm9.8,41.19H14.05V50.86h5.13Zm12.7-.65a.67.67,0,0,1-.67.65H28.8a.66.66,0,0,1-.65-.65v-1h3.74ZM46,52.55H40.82V50.86h5.12Zm11.71-4.06a1.17,1.17,0,0,1-1.17,1.17H51.82V11.36h4.67a1.16,1.16,0,0,1,1.17,1.14Z"></path><path d="M5.26,14.79a.6.6,0,0,0-.6.61v.27a.6.6,0,0,0,1.2,0V15.4A.6.6,0,0,0,5.26,14.79Z"></path><path d="M5.26,19.92a.6.6,0,0,0-.6.6v.27a.6.6,0,1,0,1.2,0v-.27A.6.6,0,0,0,5.26,19.92Z"></path><path d="M5.26,25a.6.6,0,0,0-.6.6v.27a.6.6,0,1,0,1.2,0v-.27A.6.6,0,0,0,5.26,25Z"></path><path d="M54.74,29.76a.6.6,0,0,0-.6.6v.27a.6.6,0,0,0,1.2,0v-.27A.6.6,0,0,0,54.74,29.76Z"></path><path d="M54.74,13.24a.6.6,0,0,0-.6.6v.27a.6.6,0,0,0,1.2,0v-.27A.6.6,0,0,0,54.74,13.24Z"></path><path d="M54.74,46.28a.6.6,0,0,0-.6.6v.27a.6.6,0,1,0,1.2,0v-.27A.6.6,0,0,0,54.74,46.28Z"></path></svg></td>
                            <td>Filters Change</td>
                        </tr>
                        <tr>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M27.14,21.6a3.4,3.4,0,1,0-3.4-3.4A3.42,3.42,0,0,0,27.14,21.6Zm0-4.81a1.48,1.48,0,1,1-1.47,1.47A1.49,1.49,0,0,1,27.14,16.79Z"></path><path d="M33,30a5.84,5.84,0,1,0-5.84,5.84A5.86,5.86,0,0,0,33,30Zm-5.84,3.91A3.92,3.92,0,1,1,31.06,30,3.88,3.88,0,0,1,27.14,33.92Z"></path><path d="M19.19,27.38a3.56,3.56,0,0,0-.2-2.57,3.06,3.06,0,0,0-2-1.67,3.34,3.34,0,0,0-4.23,2.18A3.56,3.56,0,0,0,13,27.89a3.09,3.09,0,0,0,2,1.67,2.88,2.88,0,0,0,1,.19A3.42,3.42,0,0,0,19.19,27.38Zm-1.87-.58a1.48,1.48,0,1,1-2.11-1.73,1.14,1.14,0,0,1,.64-.13,1.17,1.17,0,0,1,.45.06h0A1.39,1.39,0,0,1,17.32,26.8Z"></path><path d="M22.2,36.81a3.16,3.16,0,0,0-2.5-.58,3.27,3.27,0,0,0-2.18,1.35,3.14,3.14,0,0,0-.58,2.5,3.31,3.31,0,0,0,1.35,2.19,3.24,3.24,0,0,0,2,.64,1.15,1.15,0,0,0,.51-.07A3.29,3.29,0,0,0,23,41.5a3.37,3.37,0,0,0-.77-4.69Zm-.77,3.59a1.48,1.48,0,0,1-1,.58,1.33,1.33,0,0,1-1.09-.25,1.52,1.52,0,0,1-.32-2.06h0a1.37,1.37,0,0,1,1.15-.58,1.33,1.33,0,0,1,.84.26A1.47,1.47,0,0,1,21.43,40.4Z"></path><path d="M32.08,36.81a3.39,3.39,0,0,0-.77,4.75,3.31,3.31,0,0,0,2.19,1.35c.19,0,.38.06.51.06a3.2,3.2,0,0,0,2-.64,3.46,3.46,0,0,0,.77-4.75A3.31,3.31,0,0,0,32.08,36.81ZM35,40.73a1.33,1.33,0,0,1-1.09.25,1.48,1.48,0,0,1-1-.58,1.51,1.51,0,0,1,.32-2,1.44,1.44,0,0,1,.83-.26,1.4,1.4,0,0,1,1.16.58A1.45,1.45,0,0,1,35,40.73Z"></path><path d="M39.91,23.33a3.28,3.28,0,0,0-2.56-.19,3.63,3.63,0,0,0-2,1.67,3.26,3.26,0,0,0-.2,2.57,3.66,3.66,0,0,0,1.67,2,3.53,3.53,0,0,0,1.54.38,2.88,2.88,0,0,0,1-.19,3.66,3.66,0,0,0,2-1.67,3.3,3.3,0,0,0,.19-2.57A3.36,3.36,0,0,0,39.91,23.33Zm-.25,3.73a1.54,1.54,0,0,1-.84.7,1.56,1.56,0,0,1-1.09-.06,1.47,1.47,0,0,1-.7-.84,1.56,1.56,0,0,1,.06-1.09,1.52,1.52,0,0,1,.83-.7,1,1,0,0,1,.45-.07,2.08,2.08,0,0,1,.65.13,1.51,1.51,0,0,1,.7.84A1.12,1.12,0,0,1,39.66,27.06Z"></path><path d="M45.24,24.1a19,19,0,1,0-18,25,18.65,18.65,0,0,0,5.84-1,18.93,18.93,0,0,0,12.19-24ZM32.47,46.31A17.11,17.11,0,0,1,21.88,13.77a16.72,16.72,0,0,1,5.33-.83A17.48,17.48,0,0,1,35,14.8a17.11,17.11,0,0,1,7.45,23A17.2,17.2,0,0,1,32.47,46.31Z"></path><path d="M50.25,7.8a.94.94,0,0,0-1.35,0l-2.83,2.83A27.33,27.33,0,0,0,18.8,4.27,27.06,27.06,0,0,0,1.47,38.35,27.05,27.05,0,0,0,27.14,57a27.28,27.28,0,0,0,19.51-8.28l3.47,3.46a1,1,0,0,0,.7.26h0a1,1,0,0,0,.71-.32,35.27,35.27,0,0,0,4.88-7A32,32,0,0,0,50.25,7.8ZM34.91,53.88A25.1,25.1,0,1,1,19.38,6.14,25.25,25.25,0,0,1,44.66,12l-2.5,2.5a1,1,0,0,0-.26.71,1,1,0,0,0,.32.7,20.38,20.38,0,0,1,3.92,24h0a22.7,22.7,0,0,1-2.83,4.17.9.9,0,0,0,.07,1.28l2,2A26.09,26.09,0,0,1,34.91,53.88Zm19.7-9.63a29.68,29.68,0,0,1-3.92,5.84L45.3,44.7a22.65,22.65,0,0,0-1.09-29.52L49.6,9.79A30.1,30.1,0,0,1,54.61,44.25Z"></path></svg></td>
                            <td>Brakes Check</td>
                        </tr>
                        <tr>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M60,19.83C58.2,13.12,53.75,8.66,46.78,6.6a.94.94,0,0,0-1,.25L33.29,19.38a.93.93,0,0,0,0,1.35l5.55,5.55-8.91,8.91L21,26.35l5.61-5.62a.93.93,0,0,0,0-1.35L14.19,6.85a1,1,0,0,0-.91-.25C6.5,8.4,2.05,12.79.05,19.76a.93.93,0,0,0,.26,1L12.77,33.25a.94.94,0,0,0,.71.26,1.39,1.39,0,0,0,.71-.26l5.55-5.55,8.84,8.84-5.23,5.23a5.61,5.61,0,0,0-6.58,0l-2-2a1,1,0,0,0-1.36,1.36l2,2a5.74,5.74,0,0,0,4.71,9,5.54,5.54,0,0,0,3.3-1l2.06,2.07a1.13,1.13,0,0,0,1.42,0,.94.94,0,0,0,0-1.36l-2.06-2.06a5.63,5.63,0,0,0,0-6.59L30.06,38l5.3,5.3a5.52,5.52,0,0,0-1,3.29,6,6,0,0,0,1,3.29l-2.13,2a.94.94,0,0,0,0,1.36,1,1,0,0,0,.71.25,1,1,0,0,0,.71-.25l2-2a5.51,5.51,0,0,0,3.29,1A5.86,5.86,0,0,0,44,50.55a5.66,5.66,0,0,0,1.68-4.07,5.83,5.83,0,0,0-1-3.29l2.07-2.06a1,1,0,0,0,0-1.36.94.94,0,0,0-1.36,0l-2.07,2.07a5.61,5.61,0,0,0-6.58,0l-5.42-5.23,9-9,5.62,5.61a.94.94,0,0,0,.71.26,1.39,1.39,0,0,0,.71-.26L59.82,20.73A1.09,1.09,0,0,0,60,19.83ZM13.22,8.6l2.19,2.19L4.25,22l-2.2-2.2C3.92,14,7.54,10.28,13.22,8.6Zm.26,22.59L5.6,23.38,16.77,12.21l7.87,7.88Zm3.87,17.94A3.77,3.77,0,0,1,20,42.68a3.65,3.65,0,0,1,2.65,1.09,3.77,3.77,0,0,1,1.1,2.65,3.78,3.78,0,0,1-6.39,2.71Zm22.52-6.39a3.75,3.75,0,0,1,0,7.49,3.65,3.65,0,0,1-2.64-1.1,3.75,3.75,0,0,1,2.64-6.39Zm6.65-11.55L35.36,20.09l7.87-7.88L54.4,23.38ZM55.75,22,44.59,10.86l2.19-2.2c5.87,1.87,9.49,5.49,11.17,11.17Z"></path><path d="M46.78,19.63a3.33,3.33,0,1,0-4.71,4.72,3.27,3.27,0,0,0,2.32,1,3.35,3.35,0,0,0,2.39-5.68ZM45.42,23a1.48,1.48,0,0,1-2,0,1.5,1.5,0,0,1,0-2,1.43,1.43,0,0,1,1-.39,1.31,1.31,0,0,1,1,.39A1.42,1.42,0,0,1,45.42,23Z"></path><path d="M17.8,19.76a3.35,3.35,0,0,0-4.71,0,3.28,3.28,0,0,0-1,2.33,3,3,0,0,0,1,2.32,3.24,3.24,0,0,0,2.32,1,3.29,3.29,0,0,0,3.29-3.29A3.21,3.21,0,0,0,17.8,19.76Zm-1.42,3.36a1.48,1.48,0,0,1-2,0,1.4,1.4,0,0,1,0-1.94,1.4,1.4,0,0,1,1-.38,1.32,1.32,0,0,1,1,.38,1.47,1.47,0,0,1,.38,1A1.36,1.36,0,0,1,16.38,23.12Z"></path></svg></td>
                            <td>Engine Performance Examination</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <h4>Each 10 000 km, else annualy </h4>
                <button>Subscribe</button>
            </div>

            <div className='prx-card' id='premium'>
                <h1>Premium</h1>
                <h3>120$</h3>
                <br/>
                <p>Full access to our services, prioritization for your booking, and many more ...</p>
                <hr/>
                    <table>
                        <tbody>
                            <tr>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
</svg></td>
                                <td>All Standard Subscription features</td>
                            </tr>
                            <tr>
                                <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M12.83,13.46a.94.94,0,1,0-1.33,1.33l4.75,4.74a.93.93,0,0,0,.69.26,1,1,0,0,0,.7-.26.91.91,0,0,0,0-1.32Z"></path><path d="M48.56,49.19l-4.74-4.74a.94.94,0,0,0-1.33,1.33l4.74,4.74a1,1,0,0,0,.7.25.94.94,0,0,0,.69-.25A1,1,0,0,0,48.56,49.19Z"></path><path d="M16.25,44.45,11.5,49.19a.92.92,0,0,0,0,1.33,1.09,1.09,0,0,0,1.39,0l4.75-4.74a.92.92,0,0,0,0-1.33A1.12,1.12,0,0,0,16.25,44.45Z"></path><path d="M12.39,32a1,1,0,0,0-1-.95H4.8a.95.95,0,0,0,0,1.9h6.7A.88.88,0,0,0,12.39,32Z"></path><path d="M47.68,32a1,1,0,0,0,.94.95h6.71a.95.95,0,1,0,0-1.9H48.62A.93.93,0,0,0,47.68,32Z"></path><path d="M43.82,19.53l4.74-4.74a.94.94,0,0,0-1.33-1.33l-4.74,4.75a.91.91,0,0,0,0,1.32,1,1,0,0,0,.7.26A.82.82,0,0,0,43.82,19.53Z"></path><path d="M30,2.59A29.42,29.42,0,0,0,9.73,53.3a.91.91,0,0,0,.63.26,1,1,0,0,0,.7-.32A.92.92,0,0,0,11,51.91,27.53,27.53,0,1,1,57.54,32,27.28,27.28,0,0,1,49,51.91a.94.94,0,1,0,1.27,1.39A29.43,29.43,0,0,0,30,2.59Z"></path><path d="M31,13.46V6.76a1,1,0,1,0-1.9,0v6.7a.95.95,0,0,0,1.9,0Z"></path><path d="M37.24,49.7H22.82a1,1,0,0,0-.95.95v5.82a1,1,0,0,0,.95.94H37.3a1,1,0,0,0,1-.94V50.65A1,1,0,0,0,37.24,49.7Zm-1,5.88H23.77V51.66H36.36v3.92Z"></path><path d="M25.6,32A4.44,4.44,0,0,0,30,36.42,4.4,4.4,0,0,0,34.46,32a4.49,4.49,0,0,0-.13-1l16.25-7.9a.95.95,0,1,0-.82-1.71l-16.31,7.9A4.38,4.38,0,0,0,30,27.63,4.43,4.43,0,0,0,25.6,32ZM30,29.53a2.53,2.53,0,1,1-2.53,2.53A2.53,2.53,0,0,1,30,29.53Z"></path></svg></td>
                                <td>KPI your car</td>
                            </tr>
                            <tr>
                                <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M30,51.13a3.57,3.57,0,1,1,3.56-3.57A3.57,3.57,0,0,1,30,51.13Zm0-5.2a1.63,1.63,0,1,0,1.62,1.63A1.63,1.63,0,0,0,30,45.93Z"></path><path d="M59.47,23.1a37.67,37.67,0,0,0-58.94,0l-.44.54,15,23.47.36.45h1l.29-.39a16.41,16.41,0,0,1,7.59-5.61A19.64,19.64,0,0,1,27,38.85a18.29,18.29,0,0,0-11,6.1L2.49,23.74a35.73,35.73,0,0,1,55,0L44,45a18.37,18.37,0,0,0-3.38-3.05A20.94,20.94,0,0,0,36,41.66a16.48,16.48,0,0,1,7.17,5.47l.29.39h1.15L59.91,23.64Z"></path><path d="M25.1,46.43l-1.54-1.17c2.93-3.85,8-8.66,18-6.86l1.27-22.82,1.94.1L43.37,40l-.84.59-.42-.09C32.64,38.43,28.05,42.59,25.1,46.43Z"></path><path d="M29.41,13.67a34.88,34.88,0,0,0-9.17,1.22l-.1,2.05a33.26,33.26,0,0,1,19.47.28l.09-2A34.71,34.71,0,0,0,29.41,13.67Z"></path><path d="M29.41,19.32c-.74,0-1.48,0-2.21.07v2c.73-.05,1.46-.08,2.21-.08a32.81,32.81,0,0,1,10.2,1.6l.09-2A34.71,34.71,0,0,0,29.41,19.32Z"></path></svg></td>
                                <td>full cleaning (interior + exterior)</td>
                            </tr>
                            <tr>
                                <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M59,4.71,55.66,1.38A1,1,0,0,0,55,1.12a.82.82,0,0,0-.63.26L50,5.72a3.06,3.06,0,0,0-4.28.12L27.48,24l-3-3a.92.92,0,0,0-1.32,0l-5,5a1,1,0,0,0-.26.7,1.3,1.3,0,0,0,.26.69l.81.82L15.21,32a.94.94,0,0,0-.25.69,1.26,1.26,0,0,0,.25.69l1.51,1.51L13.57,38h0L5.39,46.17a3.13,3.13,0,0,0-.12,4.28l-1.07,1a.91.91,0,0,0,0,1.32.94.94,0,0,0,.69.25.94.94,0,0,0,.69-.25l1-1,2,2L5.77,56.61l-3.39-3.4a.94.94,0,0,0-1.33,0,.92.92,0,0,0,0,1.32l4.09,4.09a1,1,0,0,0,.7.26,1,1,0,0,0,.69-.26l3.52-3.52a3.22,3.22,0,0,0,2.08.82,3,3,0,0,0,2.2-1L25.59,43.65l1.51,1.51a.94.94,0,0,0,.69.25,1.29,1.29,0,0,0,.69-.25l3.78-3.77.81.81a1,1,0,0,0,.7.26,1.3,1.3,0,0,0,.69-.26l5-5a.91.91,0,0,0,0-1.32l-3-3L54.53,14.65a3.23,3.23,0,0,0,.94-2.2,3.16,3.16,0,0,0-.82-2.08L59,6A1,1,0,0,0,59,4.71ZM18.73,47.8l-6.16-6.16L14.2,40l6.17,6.17Zm-3,3L9.61,44.66,11.25,43l6.16,6.17Zm-2.89,2.83a1.34,1.34,0,0,1-1.76,0l-4.4-4.4a1.2,1.2,0,0,1,0-1.76L8.23,46l6.16,6.16Zm8.87-8.87-6.16-6.16L18,36.23l6.16,6.16Zm6-1.7L17.22,32.64l3.08-3.08L30.81,40.07Zm5.91-2.89-6.73-6.73L21,27.55h0l-.82-.82,3.65-3.65,3,3h0l7.55,7.55h0l3,3ZM53.21,13.33,35,31.57l-6.16-6.16L47,7.23a1.2,1.2,0,0,1,1.76,0l4.41,4.4h0a1.24,1.24,0,0,1,.37.88A1.22,1.22,0,0,1,53.21,13.33Zm.12-4.28-.25-.25-1.7-1.7L55,3.45,57,5.4Z"></path></svg></td>
                                <td>Detailed check up</td>
                            </tr>
                        </tbody>
                    </table>
                <hr/>
                <h4>Each 10 000 km, else annualy </h4>
                <button>Subscribe</button>
                <div className='tab-promo'>
                    <p>Discounted</p>
                </div>
            </div>
        </section>
       
        <div className='tab-recom'>
            <p>Recommended</p>
        </div>
    </div>
  )
}

export default Pricing