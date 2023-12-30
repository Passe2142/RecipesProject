import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

function Recipe (props) {
    const { ingr, diet, health, cuisineType, mealType, dishType } = props;   
    return(
        <div className="recipe-container">
        <h2>Recipe Details</h2>
        <ul>
            <li>
            <strong>Ingredients:</strong> {ingr}
            </li>
            <li>
            <strong>Diet:</strong> {diet}
            </li>
            <li>
                <strong>Health:</strong> {health}
            </li>
            <li>
                <strong>Cuisine Type:</strong> {cuisineType}
            </li>
            <li>
                <strong>Meal Type:</strong> {mealType}
            </li>
            <li>
                <strong>Dish Type:</strong> {dishType}
            </li>
            </ul>
            <Link to="/recipes">Back to Recipes</Link>
        </div>
    );

}

Recipe.propTypes = {
    ingr: PropTypes.node.isRequired,
    diet: PropTypes.node.isRequired,
    health: PropTypes.node.isRequired,
    cuisineType: PropTypes.node.isRequired,
    mealType: PropTypes.node.isRequired,
    dishType: PropTypes.node.isRequired,

};


export default Recipe;