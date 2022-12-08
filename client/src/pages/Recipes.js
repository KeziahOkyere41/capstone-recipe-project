import React, { useState } from "react";
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes({ onDeleteRecipe, recipes, user }){
  const [search, setSearch] = useState({
    result: []
  });
  
  
  function filterSearch(input){
   const filter = recipes.filter((recipe) => {
         if (input === '') return false;
         if(recipe.title.toLowerCase().includes(input.toLowerCase()) ||  recipe.categories.toLowerCase().includes(input.toLowerCase()) || recipe.ingredients.toLowerCase().includes(input.toLowerCase()) || recipe.number_of_people_served === input || recipe.duration.toLowerCase().includes(input.toLowerCase())) return true;
          return (input === recipe.title) || (input === recipe.categories) || (input === recipe.ingredients) || (input === recipe.number_of_people_served) || (input === recipe.duration)
        })
        setSearch((prev) => {
          return {...prev, result:filter}
        })
    }
    
    

    return (
        <div>
            <PreviousSearches filterSearch={filterSearch}/>
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {search.result.length === 0 ? (
                  recipes?.map((recipe) => (
                    <RecipeCard key={recipe.id}  onDeleteRecipe={onDeleteRecipe} user={user} recipe={recipe} />
                ))) : (
                 search.result?.map((recipe) => (
                    <RecipeCard key={recipe.id}  onDeleteRecipe={onDeleteRecipe} user={user} recipe={recipe} />
                )) 
                )}
            </div>
        </div>
    )
}
