import React, { useEffect, useState } from 'react';
import './details.css';
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState([]);
    const [formData, setFormData] = useState({
      rating: 0,
      comment: "",
      user_id: recipe.user_id,
      recipe_id: recipe.id
    })
    const params = useParams();
    console.log(params)
    
    useEffect(() => {
        fetch(`/recipes/${params.id}`)
            .then(r => r.json())
            .then(data => setRecipe(data))
    }, [params.id])
    
     function handleChange(event) {
       setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
    function addReviewHandler(e){
      e.preventDefault();
    
      const newReview = {
        ...formData
      };
    
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
        }).then((r) => r.json())
        .then((newReview) => setFormData(newReview));
    
    }
    
    const reviewItems = recipe.reviews
    
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

                        <Form onSubmit={addReviewHandler}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    value={formData.rating}
                                    onChange={handleChange}
                                    type="number"
                                />
                            </Form.Group>

                        

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
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

                        <h5>Product Reviews</h5>
                        <hr />

                        {reviewItems ? (
                            recipe.reviews.map(review => {
                                return <p key={review.id}>Rating: {review.rating} <br /> {review.comment}</p>
                            })
                        ): ( <p> No reviews for this product </p> )}

                        
                </Col>
               
	         </div>
                
        </>

    );
}

export default RecipeDetails;


