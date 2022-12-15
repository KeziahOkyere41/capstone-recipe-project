import React, {useState, useEffect, useRef} from "react";
import CustomImage from "./CustomImage";
import TotalRating from "./TotalRating";
import { Link } from 'react-router-dom';
import Share from './Share';
import RecipeDrop from "./RecipeDrop";
import { BsBookmarkStar } from "react-icons/bs";
import photo from '../img/user.png';

export default function RecipeCard({ onDeleteRecipe, recipe, user}){
  console.log(recipe)
  const [isbookmark, setIsBookmark] = useState(null);
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
        r.json().then((data) => setIsBookmark(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }
  const newArray = []
  const ratingArray = recipe.reviews?.map((review) => {
    
    newArray.push(review.rating);
    console.log(newArray)
    
  })
  console.log(newArray)
  const sumRating = newArray.reduce((pre,curr)=>pre+curr,0);
  const totalRating = sumRating/ratingArray.length;
  console.log(totalRating)
  
  function handleDeleteClick() {
      fetch(`/recipes/${recipe.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteRecipe(recipe);
        }
      });
    }
    console.log(recipe.reviews)
    return (
      <>
       {user ? (
          <div className="recipe-card">
            <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
            <div className="recipe-card-info">
                {console.log(recipe.user.image)}
                {recipe.user?.image !== null ? <img className="auther-img" src={recipe.user.image} alt=""/> : <img className="auther-img" src={photo} alt=""/> }
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.body}</p>
                {console.log(recipe.reviews)}
                <BsBookmarkStar onClick={handleBookmark} /> <br/>
                <Share />
                <TotalRating rating={totalRating} />
                <Link className="view-btn" to={`/recipes/${recipe.id}`}>VIEW RECIPE</Link>
                {user.id === recipe.user.id ? <RecipeDrop handleDeleteClick={handleDeleteClick} />: null}
            </div>
          </div>):(
            <div className="recipe-card">
              <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
              <div className="recipe-card-info">
                <img className="auther-img" src={recipe.user.image} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.body}</p>
                <TotalRating rating={totalRating} />
                <Link className="view-btn" to={`/login`}>VIEW RECIPE</Link>
              </div>
            </div>
          )}

      </>  
    )
}
