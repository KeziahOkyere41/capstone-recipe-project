import RecipeCard from "../components/RecipeCard"
import React, { useEffect, useState } from 'react';


export default function Bookmarks({ user }){
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
    fetch("/book_marks")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (data) => {
             setRecipes(data)
           }
          );
         }
       });
    }, [])

    console.log(recipes)
    
   
    return (
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} user={user} recipe={recipe} />
        ))}
      </div>
    )
    
}
