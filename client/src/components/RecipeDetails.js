import React, { useEffect, useState } from 'react';
import CustomImage from './CustomImage';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetch(`/recipes/${params.id}`)
            .then(r => r.json())
            .then(data => setRecipe(data))
    }, [params.id])
    
    if (!recipe) return <h2>Loading...</h2>
    
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.thumbnail} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    );
}

export default RecipeDetails;


