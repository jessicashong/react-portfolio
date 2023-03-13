import React from "react";

function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-bar">
            <li className="nav-page">
                <a href="#aboutme" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li className="nav-page">
                <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
            </li>
            <li className="nav-page">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-page">
                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    );
};

export default NavBar;