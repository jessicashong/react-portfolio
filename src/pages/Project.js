import React from "react";



const styles = {
    cardStyles: {
        margin: '0.5rem',
        width: '18rem',
    },
    containerStyles: {
        display: 'flex',
        justifyContent: 'space-around',
        
    }
}

export default function Project({ projects }){
    return(
        <div className="container row row-cols- row-cols-sm-2 row-cols-md-4 justify-content-evenly" style={styles.containerStyles}>
            {projects.map((projects) => (
                <div className="card col" style={styles.cardStyles} key={projects.id}>
                    <img src={projects.image} className="card-img-top card-img" alt={projects.name} />
                    <div className="card-body">
                        <a href={projects.github} target={"_blank"} rel="noreferrer">
                            <h5 className="card-title">{projects.name}</h5>
                        </a>
                        <p className="card-text">{projects.tech}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
