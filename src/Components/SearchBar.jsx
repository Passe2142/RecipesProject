import '../Style/style.css';
function SearchBar () {
    return(
            <form action="" className='search-form'>
            <input className='search-bar' type="text" placeholder="Recipes..."></input>
            <button className='search-button'>Search!</button>
            </form>
    )

}


export default SearchBar;