import CustomImage from "./CustomImage"
import StarRating from "./StarRating"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.thumbnail} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.user.image} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <StarRating/>
                <a className="view-btn" href="jollof.js">VIEW RECIPE</a>
            </div>
        </div>

        
    )
}
