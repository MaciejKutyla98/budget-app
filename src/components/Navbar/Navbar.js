import React from "react";
import './Navbar.scss';
import gitHub from '../../assets/GitHub.png';

const Navbar = () => (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar_container'>
            <span className='navbar_container_appName'>Budgetr</span>
            <a className='navbar_container_button' href="https://github.com/MaciejKutyla98" target="_blank">
                <span className='navbar_container_button_github'>
                    <img className="navbar_container_button_github_icon" src={gitHub} alt="Github logo" width="24px" height="24px"></img>
                </span>
                <span className='navbar_container_button_githubText'>Github</span>
            </a>
        </div>
    </nav>

);

export default Navbar;

