import React, { useEffect, useState } from 'react';
import './details.css';
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Rate from './Rate';
import StarRating from './StarRating';
// import StarsRating from "react-star-rate";
import { Link } from 'react-router-dom';

function RecipeDetails({ user, rating, setRating }) {
    
    const [recipe, setRecipe] = useState([]);
    const [formData, setFormData] = useState({
      comment: "",
      user_id: user.id
    })
    const params = useParams();
    console.log(params)
    
    useEffect(() => {
        fetch(`/recipes/${params.id}`)
            .then(r => r.json())
            .then(data => setRecipe(data))
    }, [params.id])
    
    function handleAddRecipeReview(newRecipeReview) {
    setRecipe([...recipe.reviews, newRecipeReview]);
  }
    console.log(recipe.review)
     function handleChange(event) {
       setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      
    
    function addReviewHandler(e){
      e.preventDefault();
    
      const newReview = {
        ...formData, rating, recipe_id: recipe.id
      };
    
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
        }).then((r) => r.json())
        .then((newReview) => setFormData(newReview));
        handleAddRecipeReview(newReview)
    
    }
    console.log(recipe)
    const reviewItem = recipe.reviews;
    if (!recipe) return <h2>Loading...</h2>
    console.log(recipe)
    
    return ( 
       
   
    <>
                  <div className="content">
                    <img src={recipe.thumbnail} alt="" />
                    <div className="inner-content">
                        <h1>{recipe.title}</h1>
                        <h2>Can serve: {recipe.number_of_people_served} people</h2>
                        <h3>Category: {recipe.categories}</h3>
                        <h2>Can be prepared in: {recipe.duration}</h2>
                    </div>
                
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{recipe.ingredients}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{recipe.procedures}</h4>
                        </div>
                    </div>
                    <Col md={4} lg={4} sm={4}>

                    <h2 className='text-center'>Add Review</h2>
                    <hr />
			<div className="row">
              		  <div className="col text-center">
          		    <h2>Rate me</h2>
          		    <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          		    <p>Rating - {rating}</p>
                          </div>
      			</div>
                        <Form className="section forms" onSubmit={addReviewHandler}>
                            
                           <Form.Group className="form" controlId="description">
                                <Form.Control
                                    name="comment"
                                    placeholder="Comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    as="textarea"
                                    />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Add Review
                            </Button>
                       </Form>

                         <br />

                        <h5>Recipe Reviews</h5>
                        <hr />

                        {recipe.reviews !== [] ? (
                            recipe.reviews?.map(review => {
                                return <StarRating user={user} key={review.id} review={review}/>
                            })
                        ): ( <p> No reviews for this recipe </p> )}

                        
                </Col>
               
	         </div>
                
        </>

    );
}

export default RecipeDetails;


