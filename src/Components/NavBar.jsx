import  '../Style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
    return (
        <div className='navbar'>
            <div className="logo-container">
                        <span className="logo-text">Green Habit</span>
            </div>
            <nav >
                    <ul className='nav-link'>
                        <li> <a href='#'>Recipes</a></li>
                        <li> <a href='#'>Categories</a></li>
                        <li> <a href='#'>Holidays</a></li>
                        <li> <a href='#'>About Me</a></li>
                    </ul>
            </nav>
            <input className='nav-input' type="text" placeholder='Search Recipes' />
            <button className='nav-button' type="submit"> <FontAwesomeIcon icon={faLeaf} />Search</button>
        </div>

            );
}

export default NavBar;