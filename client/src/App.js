import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React, {
  useEffect,
  useState
} from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Bookmarks from "./pages/Bookmarks";
import AddForm from "./components/AddForm";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [errors, setErrors] = useState(null);
  
  function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

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
    /*Promise.all([
      fetch("/recipes"),
      fetch("/me") 
    ])
     .then(([recipesRes, userRes]) => {
     console.log(userRes)
       if([recipesRes.ok, userRes.ok]){
         Promise.all([recipesRes.json(), userRes.json()])
         .then(([recipes, currentUser]) => {
           setRecipes(recipes);
           setUser(currentUser);
           //setIsLoggedin((isLoggedin) => !isLoggedin)
           
         })
       }else {
        Promise.all([recipesRes.json(), userRes.json()]).then(data => setErrors(data.errors))
      }
       
     })
     */
    }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="container main">
        {user ? (
          <Routes>
            <Route path="/" element={<Home recipes={recipes} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} user={user}/>} />
            <Route path="/recipes" element={<Recipes recipes={recipes} user={user} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/bookmarks" element={<Bookmarks user={user} />} />
            <Route path="/postrecipe" element={<AddForm user={user} handleAddRecipe={handleAddRecipe}/>} />
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
