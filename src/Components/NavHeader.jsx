import  '../Style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function NavHeader() {
    return (
            <div className='navbar'>
                <div className="logo-container">
                    <Link to='/'><span className="logo-text">Green Habit</span></Link>
                </div>
                <nav >
                    <ul className='nav-link'>
                        <li> <Link to='/'>Recipes</Link></li>
                        <li> <Link to='/CategoriesPage'>Categories</Link></li>
                        <li> <Link to='/HolidaysPage'> Holidays</Link></li>
                        <li> <Link to='/AboutPage'> About Me </Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to='/SignIn' className='nav-user' type='submit'><FontAwesomeIcon icon={faUser} /> Sign In </Link>
                    <Link to='/SignUp' className='nav-user' type='submit'> <FontAwesomeIcon icon={faUtensils} /> Sign Up </Link>
                </div>
                    

            </div>
            );
}

export default NavHeader;