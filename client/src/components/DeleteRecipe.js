import React from 'react';

const Recipe = (props) => {
    // destructuring an object
    const { name, ingredients, cookingTime, procedure, thumbnail, categories, number_of_people_served, deleteRecipe } = props;

    return (
        <div class="recipie-tab" >
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Cooking Time: {cookingTime} hours</p>
            <p>Procedure: {procedure}</p>
            <p>Thumbnail: {thumbnail}</p>
            <p>Categories: {categories}</p>
            <p>Number_Of_People_Served: {number_of_people_served}</p>
            <button onClick={deleteRecipe}>
                Delete Recipe
            </button>
        </div>
    );
};

export default Recipe;