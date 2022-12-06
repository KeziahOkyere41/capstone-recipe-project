/*import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './ratings.css';

export default function StarRating(){
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
              <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e59"} size={10} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
            </label>
           )
        })
        }
        </div>
    )
}
*/

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './ratings.css';

const StarRating = ({ review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    
    return (
      <span key={index}>
        {review.rating >= index + 1 ? (
          <FaStar className="icon" />
        ) : review.rating >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="icon-style">
        {ratingStar}
        <p>{review.comment} (<span>User review</span>)</p>
      </div>
    </div>
  );
};

export default StarRating;


/*
import React, { useState } from "react";
import Rate from "./Rate";


const StarRating = ({ getRatings }) => {
  const [rating, setRating] = useState(0);
  
  getRatings(rating)
  return (
    <>
      

      <div className="row">
        <div className="col text-center">
          <h2>Rate me</h2>
          <p>Rating component</p>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
        </div>
      </div>
    </>
  );
};

//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default StarRating;

*/
