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
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home recipes={recipes}/>} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
