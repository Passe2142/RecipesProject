import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Recipe (props) {
    const { id, name, diet, image} = props;   
    return(
    <div className="plate-container">
        <div className="plate">
            <ul className="recipe-details">
                <li>
                    <strong>Name:</strong> {name}
                </li>
                <li>
                    <strong>Diet:</strong> {diet}
                </li>
            </ul>
        </div>
        <button>See details</button>
    </div>
        
    );
}



Recipe.propTypes = {
    name: PropTypes.node.isRequired,
    ingr: PropTypes.node.isRequired,
    diet: PropTypes.node.isRequired,
    health: PropTypes.node.isRequired,
    cuisineType: PropTypes.node.isRequired,
    mealType: PropTypes.node.isRequired,
    dishType: PropTypes.node.isRequired,

};


export default Recipe;