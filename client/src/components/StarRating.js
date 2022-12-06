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

const StarRating = ({ review, user }) => {
  const {rating, comment} = review;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="icon" />
        ) : rating >= number ? (
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
        <p>({review} customer reviews)</p>
      </div>
    </div>
  );
};

export default StarRating;
