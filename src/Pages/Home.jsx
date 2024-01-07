import Recipe from '../Components/Recipe';
import '../Style/style.css';
function Home() {
    return (
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
        </div>
    );
}

export default Home;