import React from "react";

function Footer({ currentPage, handlePageChange }) {
    return (
        <ul className="footer">
            <li className="footer-icon">
                <a href="https://github.com/jessicashong" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>GitHub</a>
            </li>
            <li className="footer-icon">
                <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>LinkedIn</a>
            </li>
            <li className="footer-icon">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Stack Overflow</a>
            </li>
        </ul>
    );
};