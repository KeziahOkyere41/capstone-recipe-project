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

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/recipes"),
      fetch("/me") 
    ])
     .then(([recipesRes, userRes]) => {
     console.log(userRes)
       if([recipesRes.ok, userRes.ok]){
         Promise.all([recipesRes.json(), userRes.json()])
         .then(([recipes, user]) => {
           setRecipes(recipes);
           setUser(user);
           setIsLoggedin((isLoggedin) => !isLoggedin)
         })
       }else {
        Promise.all([recipesRes.json(), userRes.json()]).then(data => setErrors(data.errors))
      }
       
     })
     
    /*fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }*/}, []);

  return (
    <Router>
      <Navbar user={user} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} setUser={setUser} />
      <div className="container main">
        {isLoggedin && user ? (
          <Routes>
            <Route path="/" element={<Home recipes={recipes} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} user={user}/>} />
            <Route path="/recipes" element={<Recipes recipes={recipes} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        ): (
        <Routes>
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUpPage />} />
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
