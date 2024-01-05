import  '../Style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
function NavHeader() {
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
                    

                <label htmlFor="userEmail">
                        <input className='navbar-input' id='userEmail' type="email" placeholder='Email Address' />
                    </label>
                    <label htmlFor="userPassword">
                        <input className='navbar-input' id='userPassword' type="password" placeholder='Password' />
                    </label>
                    <button className='nav-user' type="submit"><FontAwesomeIcon icon={faUser} /> Login </button>
                    
                    <button className='nav-user' type="submit"> <FontAwesomeIcon icon={faUtensils} /> Sign Up </button>
                </form>
            </div>
            );
}

export default NavHeader;