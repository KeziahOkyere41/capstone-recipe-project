import React, { useState } from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const [rating, setRating] = useState(null)
    return (
        <div>
        {[...Array]}.map((star, i) => {
          const ratingValue = i + 1;
          return <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
                    <faStar className="star" color={ratingValue <= 1 ? "":""} size={10}  />
                  </label>
        })
        </div>
    )
}
