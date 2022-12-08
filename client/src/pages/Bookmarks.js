import RecipeCard from "../components/RecipeCard"
import React, { useEffect, useState } from 'react';


export default function Bookmarks({ user }){
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
    fetch("/book_marks")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (data) => {
             setBookmarks(data)
           }
          );
         }
       });
    }, [])

    console.log(bookmarks)
    
    
   
    return (
      <div className="recipes-container">
        {bookmarks.recipe?.map((rec) => (
          <RecipeCard key={rec.id} user={user} recipe={rec} />
        ))}
        
      </div>
    )
    
}
