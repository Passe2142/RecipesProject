import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function MenuButton () {
    const [isDropped, setDropped] = useState(false);

    const handleDropdownToggle = () => {
        setDropped(!isDropped);
    };

    const handleDropdownClose = () => {
        setDropped(false);
    };
    return (
        <div>
            <Dropdown show={isDropped} onSelect={handleDropdownClose}>
            <DropdownButton
                id="dropdown-basic-button"
                title="MenuButton"
                show={isDropped}
                onClick={handleDropdownToggle}
            >
                <Dropdown.Item href="#/about">About Me</Dropdown.Item>
                <Dropdown.Item href="#/projects">Projects</Dropdown.Item>
                <Dropdown.Item href="#/recipes">Recipes</Dropdown.Item>
            </DropdownButton>
            </Dropdown>
        </div>
        );
    }
export default MenuButton;
