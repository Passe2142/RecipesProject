import PropTypes from 'prop-types';

function Recipe (props) {
    const { name, ingr, diet, health, cuisineType, mealType, dishType } = props;   
    return(
        <div className="recipe-card">
        <ul className="recipe-details">
            <li>
                <strong>Name:</strong> {name}
            </li>
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
        {/* You can add a Link component if needed */}
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