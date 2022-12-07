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
    /*const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)*/
    

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
