import React from "react";

const styles = {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#553d36ff',
}

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div style={styles} className="nav-container">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a href="#about" onClick={() => handlePageChange('About')} 
                    className={currentPage === 'About' ? 'nav-link activeBtn' : 'nav-link'}>
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" onClick={() => handlePageChange('Projects')} 
                    className={currentPage === 'Projects' ? 'nav-link activeBtn' : 'nav-link'}>
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} 
                    className={currentPage === 'Contact' ? 'nav-link activeBtn' : 'nav-link'}>
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume" onClick={() => handlePageChange('Resume')} 
                    className={currentPage === 'Resume' ? 'nav-link activeBtn' : 'nav-link'}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;