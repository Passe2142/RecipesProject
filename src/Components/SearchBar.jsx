import '../Style/style.css';
function SearchBar () {
    return(
        <div className='row'>
            <input className='search-bar' type="text" placeholder="Recipes..."></input>
            <button className='search-button'>Search!</button>
        </div>
    )

}


export default SearchBar;