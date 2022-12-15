import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './ratings.css';



const TotalRating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    
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
      </div>
    </div>
  );  
};

export default TotalRating;

