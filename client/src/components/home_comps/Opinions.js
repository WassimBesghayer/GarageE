import React from 'react'
import '../styling/opinions.css'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

function Opinions() {
  return (
    <div className='Core-opinion'>
        <h1>What Our Clients Are Saying About Us</h1>
        <div className='card-opinion'>
            <h1 style={{paddingBottom:'4rem'}}> Full Name</h1>
            <h6>posted on :</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, blanditiis, expedita sunt, corrupti illum ea excepturi non natus aperiam rerum quod tempora vero aspernatur minima rem? Modi sapiente nemo cupiditate?</p>
            <div className='rating-stars'>
            {/* const ratingChanged = (newRating) => {
            console.log(newRating)
            }; */}
            
            {/* render( */}
            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            
            {/* document.getElementById("where-to-render")
            ); */}
            </div>

            <img src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'/>
        </div>
    </div>
  )
}

export default Opinions


// https://www.npmjs.com/package/react-rating-stars-component