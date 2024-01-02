import Recipe from '../Components/Recipe';
function Home() {
    return (
    <div className="recipe-container">
    <h1>Recipes</h1>

    <div className="row">
        <div className="col-md-4">
            <Recipe name="..." ingr="..." diet="..." health="..." cuisineType="..." mealType="..." dishType="..." />
        </div>
        <div className="col-md-4">
            <Recipe name="..." ingr="..." diet="..." health="..." cuisineType="..." mealType="..." dishType="..." />
        </div>
        <div className="col-md-4">
            <Recipe name="..." ingr="..." diet="..." health="..." cuisineType="..." mealType="..." dishType="..." />
        </div>

        {/* Add more col-md-4 elements as needed */}
        </div>
    </div>
    );
}

export default Home;