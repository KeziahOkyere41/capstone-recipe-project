import React, { useEffect, useState } from "react";
import RecipeCard from './RecipeCard';
import { useParams, useNavigate } from "react-router-dom";


function ProfileDetails() {
  let { id } = useParams();
  let history = useNavigate();
  const [user, setUser] = useState("");

  /*useEffect(() => {
    axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
      setUsername(response.data.username);
    });

    axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);*/
  
  useEffect(() => {
        fetch(`/users/${id}`)
            .then(r => r.json())
            .then(data => setUser(data))
    }, [id])
    
  console.log(user)
  return (
    <div className="profilePageContainer">
      <div className="basicInfo">
        {" "}
        <h1> Username: {user.name} </h1>
      </div>
      <div className="listOfPosts">
        {/*{user.recipes?.map((item) =>{
          return <RecipeCard recipe={item}/>
        })}*/}
      </div>
      
    </div>
  );
}

export default ProfileDetails;
