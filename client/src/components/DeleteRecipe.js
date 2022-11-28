import React from 'react';

const DeleteRecipe = (props) => {
    // destructuring an object
    const { name, ingredients, cookingTime, procedure, thumbnail, categories, servings, deleteRecipe } = props;

    return (
        <div class="recipie-tab" >
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Cooking Time: {cookingTime} hours</p>
            <p>Procedure: {procedure}</p>
            <p>Thumbnail: {thumbnail}</p>
            <p>Categories: {categories}</p>
            <p>Servings: {servings}</p>
            <button onClick={deleteRecipe}>
                Delete Recipe
            </button>
        </div>
    );
};

export default DeleteRecipe;