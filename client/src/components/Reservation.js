// Import necessary dependencies
import React, { useState } from 'react' // Import React and useState hook
import "./styling/Book.css" // Import component-specific styles
import { useDispatch, useSelector } from 'react-redux' // Import Redux hooks for state management
import { addreservation } from '../redux/reservationSlice' // Import reservation action

// BookReservation component with ping state props for triggering updates
function BookReservation({ping, setping}) {
    const dispatch = useDispatch(); // Initialize dispatch function for Redux actions
    
    // Get user data from Redux store
    const user = useSelector((state) => state.user.user);

    // Initialize reservation state with user data and empty fields
    const [newreservation, setnewreservation] = useState({
        id_user: user?._id, // User ID with optional chaining
        full_name_user: user?.name + " " + user?.lastname, // Concatenated full name
        phone: "",
        email: user?.email, // User email
        carModel: "",
        matricule: "", // License plate/registration number
        pannes: "", // Issues/problems with the car
        date_reservation: new Date(), // Current date
        details: "" // Additional details
    })

    return (
        // Main container with flex layout
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <h1>Book an appointment</h1>
                
                {/* Form container */}
                <div className="tab">
                    {/* Car details section */}
                    <div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
                        {/* Car model input */}
                        <input 
                            type='text' 
                            placeholder="Enter you Car Model"
                            onChange={(e)=>setnewreservation({...newreservation, carModel:e.target.value })}
                        />
                        {/* License plate input */}
                        <input 
                            type='text' 
                            placeholder="Enter you Matricule"
                            onChange={(e)=>setnewreservation({...newreservation, matricule:e.target.value })}
                        />
                    </div>

                    {/* Car issues section */}
                    <div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
                        <input 
                            type='text' 
                            placeholder="Enter you Panne" 
                            id="inp"
                            onChange={(e)=>setnewreservation({...newreservation, pannes:e.target.value })}
                        />
                    </div>

                    {/* Additional details section */}
                    <div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
                        <textarea 
                            placeholder='Enter more details'
                            onChange={(e)=>setnewreservation({...newreservation, details:e.target.value })}
                        />
                    </div>

                    {/* Booking button section */}
                    <div className='onetab' style={{display:"flex", justifyContent:"space-around"}}>
                        <button onClick={()=>{
                            dispatch(addreservation(newreservation)); // Dispatch reservation to Redux
                            setping(!ping); // Toggle ping state to trigger update
                            alert("your booking is done") // Show success message
                        }}>
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookReservation // Export component