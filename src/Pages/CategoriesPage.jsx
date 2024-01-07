import{ useState, useEffect } from 'react';
import Categories from '../Components/Categories';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories data and update state
    }, []);

    return (
        <div>
        <h1>Categories Page</h1>
        <Categories categories={categories} />
        </div>
    );
};

export default CategoriesPage;