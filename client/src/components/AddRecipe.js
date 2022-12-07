import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Add = ({ user }) => {
  const navigate = useNavigate();
  const [recipeImg, setRecipeImg] = useState("");
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
  /*const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [duration, setDuration] = setState("");
  const [ingredients, setIngredients] = setState("");
  const [procedures, setProcedures] = setState("");
  const [categories, setCategories] = setState("");
  const [number_of_people_served, setNumberofPeopleServed] = setState(0);
  const [user_id, setUserId] = setState(user.id); */
 

  const handleRecipeImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };
  
  function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setRecipeImg(reader.result);
      };
    } else {
      setRecipeImg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      ...formData, thumbnail: recipeImg
    };
    
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).then((r) => r.json())
    .then((newRecipe) => setFormData(newRecipe));
    //handleAddRecipe(newRecipe);
    window.reload()
    navigate('/')
    
  
  };

  return (
    <div className="section forms">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Create a Recipe</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleRecipeImageUpload}
          required
        />
         <input
          type="text"
          name="title"
          placeholder="Name"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <select name="categories" value={formData.categories} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="African">African</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="Mexican">Mexican</option>
          <option value="other">Other</option>
        </select>
       
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="body"
          placeholder="Short Description"
          value={formData.body}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="procedures"
          placeholder="How to prepare it"
          value={formData.procedures}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="How long will it take to prepare"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="number_of_people_served"
          placeholder="How many people can it serve"
          value={formData.number_of_people_served}
          onChange={handleChange}
          required
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <div className="image-preview">
        {recipeImg ? (
          <>
            <img src={recipeImg} alt="error!" />
          </>
        ) : (
          <p>Recipe image upload preview will appear here!</p>
        )}
      </div>
    </div>
  );
};

export default Add;


