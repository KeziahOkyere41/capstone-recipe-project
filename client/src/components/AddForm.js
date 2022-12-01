import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddForm.css';

// name, cookingtime, ingredients ...

function AddForm({ handleAddRecipe, user }) {
    const [formData, setFormData] = useState({
      title: "",
      body: "",
      duration: "",
      ingredients: "",
      procedures: "",
      thumbnail: "",
      categories: "",
      number_of_people_served: 0,
      user_id: user.id
    });

    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    
    function handleSubmit(e) {
    e.preventDefault();
    
     const newRecipe = {
      ...formData
    };
    
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).then((r) => r.json())
    .then((newRecipe) => setFormData(newRecipe));
    handleAddRecipe(newRecipe);
    
  }


    // onChange -  everytime one of the input field/value changes, it will set the state automatically and can access the changes state in handleAdd

    return (
        <div>
            <h3>Add New Recipe</h3>
            <form> 
                <div style={{ display: "flex", marginBottom: "1rem" }} > 
                    <p style={{ marginRight: "1rem" }}>Recipe Name</p>
                    <input className="recipie-input" type="text" name="title" placeholder="Recipe Name" value={formData.title} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Cooking Time</p>
                    <input className="recipie-input" type="text" name="duration" placeholder="Recipe Cooking Time" value={formData.duration} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Ingredients</p>
                    <input type="text" name="ingredients" placeholder="Recipe Ingredients" value={formData.ingredients} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Procedure</p>
                    <input type="text" name="procedures" placeholder="Recipe Procedure" value={formData.procedures} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Categories</p>
                    <input type="text" name="categories" placeholder="Recipe Categories" value={formData.categories} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Thumbnail</p>
                    <input type="file" name="thumbnail" placeholder="Recipe Thumbnail" value={formData.thumbnail} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Servings</p>
                    <input className="recipie-input" type="number" name="servings" placeholder="Recipe Servings" value={formData.number_of_people_served} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddForm;
