import React from "react";

const styles = {
    cardStyles: {
        margin: '1%',
        width: '18rem',
    },
    containerStyles: {
        margin: '1%',
        display: 'flex',
        justifyContent: 'space-around',
        // flex: 1,
        
    }
}

export default function Project({ projects }){
    return(
        <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-evenly" style={styles.containerStyles}>
            {projects.map((projects) => (
                <div className="card col" style={styles.cardStyles} key={projects.id}>
                    <img src={projects.image}className="card-img-top" alt={projects.name} />
                    <div className="card-body">
                        <h5 className="card-title" href={projects.github}>{projects.name}</h5>
                        <p className="card-text">{projects.tech}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
