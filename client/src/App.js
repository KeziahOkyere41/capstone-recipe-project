import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React, {
  useEffect,
  useState
} from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Bookmarks from "./pages/Bookmarks";
import AddRecipe from "./components/AddRecipe";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [errors, setErrors] = useState(null);
  
  
  

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (currentUser) => {
             setUser(currentUser)
           }
          );
         }
       });
       
     fetch("/recipes")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (data) => {
             setRecipes(data)
           }
          );
         }
       });
    
    }, []);
    
    function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }
  const filteredRecipeData = recipes.filter((item)=>{
    return true
  })
  
    
    function handleDeleteRecipe(recipeToDelete) {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeToDelete.id);
    setRecipes(updatedRecipes);
  }
  
  
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="container main">
        {user ? ( user.book_marks.length > 0?
          <Routes>
            <Route path="/" element={<Home recipes={recipes} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} user={user}/>} />
            <Route path="/recipes" element={<Recipes onDeleteRecipe={handleDeleteRecipe} recipes={filteredRecipeData}  user={user} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipes/:id" element={<RecipeDetails rating={rating} setRating={setRating} user={user} />} />
            <Route path="/bookmarks" element={<Bookmarks user={user} />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/postrecipe" element={<AddRecipe user={user} handleAddRecipe={handleAddRecipe} />} />
          </Routes> : <Routes>
            <Route path="/" element={<Home recipes={recipes} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} user={user}/>} />
            <Route path="/recipes" element={<Recipes onDeleteRecipe={handleDeleteRecipe} recipes={recipes} user={user} />} />
            
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipes/:id" element={<RecipeDetails rating={rating} setRating={setRating} user={user} />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/postrecipe" element={<AddRecipe user={user} handleAddRecipe={handleAddRecipe} />} />
          </Routes>
        ): (
        <Routes>
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/" element={<Home recipes={recipes}/>} />
        </Routes>
        )}
      </div>
      <Footer />
    </Router>
  )
}

export default App;
