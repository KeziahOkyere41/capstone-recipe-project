import React, {useState, useEffect, useRef} from "react";
import CustomImage from "./CustomImage";
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import Share from './Share';
import RecipeDrop from "./RecipeDrop";
import { BsBookmarkStar } from "react-icons/bs";
import photo from '../img/user.png';

export default function RecipeCard({ onDeleteRecipe, recipe, user}){
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
            <CustomImage imgSrc={recipe.thumbnail} pt="50%"/>
            <div className="recipe-card-info">
                {console.log(recipe.user.image)}
                {recipe.user?.image !== null ? <img className="auther-img" src={recipe.user.image} alt=""/> : <img className="auther-img" src={photo} alt=""/> }
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Jollof, or jollof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions.</p>
                {console.log(recipe.reviews)}
                <BsBookmarkStar onClick={handleBookmark} /> <br/>
                <Share />
                <Link className="view-btn" to={`/recipes/${recipe.id}`}>VIEW RECIPE</Link>
                {user.id === recipe.user.id ? <RecipeDrop handleDeleteClick={handleDeleteClick} />: null}
            </div>
          </div>):(
            <div className="recipe-card">
              <CustomImage imgSrc={recipe.thumbnail} pt="50%"/>
              <div className="recipe-card-info">
                <img className="auther-img" src={recipe.user.image} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Fried yam is a
                 popular street food in African countries like Nigeria, and Ghana. It's usually served with pepper sauce and sometimes with fried plantain, and fish.</p>
                <Link className="view-btn" to={`/login`}>VIEW RECIPE</Link>
              </div>
            </div>
          )}

      </>  
    )
}
