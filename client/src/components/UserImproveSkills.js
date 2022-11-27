import { useNavigate } from  'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';

export default function UserImproveSkills(){
    const navigate = useNavigate();
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    const [yourname, setYourName] = useState("Solocipes");
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]); // a list of objects
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/recipe/recipes')
        .then(response => {
    
          //set the state for recipes
          setRecipes(response.data); // response.data because the variable for json object (in array) is user-defined as 'data'
          
          // set loading as false, because the app is already loaded to display data
          setLoading(false);
          // console.log(response); // view data in Console tab of webpage (F12)
        })
      }, [])

      const handleAdd = (name, cookingtime, ingredients, procedure) => {
        axios.post('https://localhost:5000/recipe/recipes', {
            name,
            cookingtime: parseFloat(cookingtime),
            ingredients,
            procedure
        })
        .then(response => {
            if(response.status === 201) {
                setRecipes([ ...recipes, response.data[0] ])
            }
            else{
                console.log(response)
            }
        })
      }

      const handleDelete = (id) => {
        axios.delete('https://localhost:5000/recipe/recipes/' + id)
        .then(response => {
            if(response.status === 200) {
                setRecipes(recipes.filter(recipe => recipe.id !== id));
            }
            else{
                console.log(response);
            }
        })
      }
    
    function handleClick(){
      navigate("/AddForm")
    }

    return (
        <div class="body" >
        <h1 class="title" >{yourname}'s Recipe App</h1>
        <h3>The one stop shop for all your recipes!</h3>
  
        <p> You've searched for { searchQuery } </p>
        <input placeholder="Search Recipes" class="recipie-input" onChange={e => setSearchQuery(e.target.value.toLowerCase())} />
  
        <AddForm handleAdd={handleAdd} />

        {
        // ternary operater in react, also called as Conditional Rendering
        loading ? // if loading, show <div> Loading
        <div>Loading...</div>
        : // else display data, recipe.filter with do search, then change it to lowercase
        recipes
        .filter(recipe => recipe?.name.toLowerCase().includes(searchQuery))
        .map(recipe => {
          return (
            // recipe?  --> means only when the recipe object/data is exist, then destructure it, if not then don't do anything
            // every component that is rendered as a map, should have a key which tells react how to render the component
            // reference via dan abramov react keys
            // https://twitter.com/dan_abramov/status/1415279090446204929?lang=en
            <recipe
              key={recipe?.id}
              name={recipe?.name}
              ingredients={recipe?.ingredients}
              cookingTime={recipe?.cookingtime}
              procedure={recipe?.procedure}

              // do Delete with Callback function
              // pass down an anonymous callback
              // once the Delete button is clicked, it will trigger the handleDelete function and pass the recipe id
              // can access the id here because App.js is the parent component, cannot access in child component like Recipe.js
              deleteRecipe={() => handleDelete(recipe?.id)}
            />
          );
        })
      }
  
                <button onClick={handleClick} className="btn">Add Recipe</button>
            </div>
    );
}
