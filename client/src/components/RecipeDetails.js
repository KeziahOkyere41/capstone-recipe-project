import React, { useEffect, useState } from 'react';
import './details.css';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState([]);
    const params = useParams();
    console.log(params)
    
    useEffect(() => {
        fetch(`/recipes/${params.id}`)
            .then(r => r.json())
            .then(data => setRecipe(data))
    }, [params.id])
    
    if (!recipe) return <h2>Loading...</h2>
    
    return (
        <>
                  <div className="content">
                    <img src={recipe.thumbnail} alt="" />
                    <div className="inner-content">
                        <h1>{recipe.title}</h1>
                        <h2>Can serve: {recipe.number_of_people_served} people</h2>
                        <h3>Category: {recipe.categories}</h3>
                        <h2>Can be prepared in: {recipe.duration}</h2>
                    </div>
                
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{recipe.ingredients}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{recipe.procedures}</h4>
                        </div>
                    </div>
               
	         </div>
                
        </>

    );
}

export default RecipeDetails;


