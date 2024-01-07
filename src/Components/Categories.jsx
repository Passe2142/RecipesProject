import PropTypes from 'prop-types';
function Categories  ({ categories })  {
    return (
        <div>
        <h2>Categories</h2>
        <ul>
            {categories.map(category => (
            <li key={category.id}>{category.name}</li>
            ))}
        </ul>
        </div>
    );
}

Categories.propTypes = {
    categories: PropTypes.node.isRequired
}

export default Categories;
