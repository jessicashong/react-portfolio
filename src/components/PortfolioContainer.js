import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

import projects from "../projectlist";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === "About"){
            return <About />;
        } if(currentPage === 'Projects'){
            return <Project projects={projects} />;
        } if(currentPage === 'Resume'){
            return <Resume />;
        } return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;