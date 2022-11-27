import { useState } from "react";
import CustomImage from "./CustomImage";
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import Share from './Share';
import { BsBookmarkStar } from "react-icons/bs"

export default function RecipeCard({ recipe, user}){
  console.log(recipe)
  const [bookmark, setBookmark] = useState(null);
  const [errors, setErrors] = useState([]);
  
  function handleBookmark(e){
    e.preventDefault();
    fetch("/book_marks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id })
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setBookmark(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
    
  }
    return (
      <>
       {user ? (
          <div className="recipe-card">
            <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.user.image} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <StarRating/>
                <BsBookmarkStar onClick={handleBookmark} /> <br/>
                <Share />
                <Link className="view-btn" to={`/recipes/${recipe.id}`}>VIEW RECIPE</Link>
            </div>
          </div>):(
            <div className="recipe-card">
              <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
              <div className="recipe-card-info">
                <img className="auther-img" src={recipe.user.image} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <StarRating/>
                <Link className="view-btn" to={`/login`}>VIEW RECIPE</Link>
              </div>
            </div>
          )}

      </>  
    )
}
