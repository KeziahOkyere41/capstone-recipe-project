import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddForm.css';

// name, cookingtime, ingredients

const AddForm = props => {
    const [name, setName] = useState("");
    const [cookingtime, setCookingtime] = useState(0);
    const [ingredients, setIngredients] = useState("");
    const [procedure, setProcedure] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [categories, setCategories] = useState("");
    const [number_of_people_served, setNumber_Of_People_Served] = useState("");

    const { handleAdd } = props;

    // onChange -  everytime one of the input field/value changes, it will set the state automatically and can access the changes state in handleAdd

    return (
        <div>
            <h3>Add New Recipe</h3>
            <form> 
                <div style={{ display: "flex", marginBottom: "1rem" }} > 
                    <p style={{ marginRight: "1rem" }}>Recipe Name</p>
                    <input className="recipie-input" type="text" name="name" placeholder="Recipe Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Cooking Time</p>
                    <input className="recipie-input" type="text" name="name" placeholder="Recipe Cooking Time" onChange={(e) => setCookingtime(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Ingredients</p>
                    <input type="text" name="name" placeholder="Recipe Ingredients" onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Procedure</p>
                    <input type="text" name="name" placeholder="Recipe Procedure" onChange={(e) => setProcedure(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Categories</p>
                    <input className="recipie-input" type="text" name="name" placeholder="Recipe Categories" onChange={(e) => setCategories(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Thumbnail</p>
                    <input type="file" name="name" placeholder="Recipe Thumbnail" onChange={(e) => setThumbnail(e.target.value)} />
                </div>
                <div style={{ display: "flex", marginBottom: "1rem" }} >
                    <p style={{ marginRight: "1rem" }}>Recipe Number_Of_People_Served</p>
                    <input className="recipie-input" type="text" name="name" placeholder="Recipe Number_Of_People_Served" onChange={(e) => setNumber_Of_People_Served(e.target.value)} />
                </div>
                <button type="submit" onClick={() => handleAdd(name, cookingtime, ingredients, procedure, categories, thumbnail, number_of_people_served)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddForm;
