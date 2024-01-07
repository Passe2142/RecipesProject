import  '../Style/style.css';
import NavHeader from '../Components/NavHeader';
import SearchBar from '../Components/SearchBar';
import PropTypes from 'prop-types';
function Header({ includeSearchBar = true }) {
    return (
        <div>
            <NavHeader />
            {includeSearchBar && <SearchBar />}
        </div>
    );
}


Header.propTypes = {
    includeSearchBar: PropTypes.bool
};

export default Header;