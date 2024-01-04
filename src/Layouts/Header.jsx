import  '../Style/style.css';
import NavHeader from '../Components/NavHeader';
import SearchBar from '../Components/SearchBar';

function Header() {
    return (
    <div>
        <NavHeader />
        <SearchBar />
    </div>
    );
}

export default Header;