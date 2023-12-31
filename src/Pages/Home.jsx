import Recipe from '../Components/Recipe';
function Home() {
    return (
    <div>
        <h1>Recipes</h1>
        <Recipe name="..." ingr="..." diet="..." health="..." cuisineType="..." mealType="..." dishType="..." />
        <Recipe name="..." ingr="..." diet="..." health="..." cuisineType="..." mealType="..." dishType="..." />
        {/* Add more Recipe components as needed */}
        </div>
    );
}

export default Home;