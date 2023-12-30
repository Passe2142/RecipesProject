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
            <form>
            <button className='nav-button' type="submit"> <FontAwesomeIcon icon={faLeaf} />Login</button>
            <label htmlFor="userName">
                    <input className='navbar-input' id='userName' type="text" placeholder='User Name' />
                </label>
                <label htmlFor="userPassword">
                    <input className='navbar-input' id='userPassword' type="password" placeholder='Password' />
                </label>
            </form>
        </div>
            );
}

export default NavBar;