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
<<<<<<< HEAD
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
=======
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.thumbnail} pt="20%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.thumbnail} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Ingredients</p>
                <p className="recipe-desc">For a serving of 4 - 6</p>
                <p> 6 large tomatoes</p>
                <p> 4 large onions</p>
                <p> 6 cloves of pressed garlic</p>
                <p> 2 chillies (optional)</p>
                <p> 2 tablespoons of tomato paste</p>
                <p> vegetable oil</p>
                <p> 500g of beef, chicken or lamb (alt: mixed vegetables)</p>
                <p> 800g long grain rice</p>
                <p> 1,5 litres of water or stock (± 1 stock cube, depending on how much meat is used)</p>
                <p> 1 teaspoon each of ground white and black pepper</p>
                <p className="recipe-desc">Preparation</p>
                <p className="recipe-desc">Put tomatoes into the blender and set aside. Then, in a non-stick pot, fry pre-cooked meat in oil. When these have browned, remove and set aside.
                    Add onions and fry until soft before adding garlic and blended tomatoes. Add meat stock and/or stock cube(s), tomato paste, ground white and black pepper and stir. Remember to season strongly because rice will later be added to this sauce.
                    Cook for ± 10 minutes on medium heat before adding rice. Stir and mix well before covering. Cook on low heat for ± 20 minutes. Add vegetables and mix well. Add about 1 cup more of water and continue to cook on low heat until rice is done.</p>
            </div>
        </div>
>>>>>>> 038eb676e663487cde74d0e6567c9df161b4087f
    );
}

export default RecipeDetails;


