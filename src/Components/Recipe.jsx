import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Style/style.css';
function Recipe (props) {
    const { id, name, diet, image, description} = props;   
    return(
    <div className="plate-container">
        <div className="plate">
        <img src='Images/tartaAcelgaYEspinaca.png' className='plate-image' alt='imagen'/>

        </div>
        <ul className="recipe-details">
                <li>
                    <strong>Name:</strong> {name}
                </li>
                <li>
                    <strong>Description:</strong> {description}
                </li>
            </ul>
        <button className='plate-button '>See details</button>
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