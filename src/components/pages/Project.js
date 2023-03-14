import React from "react";

export default function Projects({ projects }){
    return(
        <div className="container">
            {projects.map((projects) => {
                <div className="card" style="width: 18rem;"key={projects.id}>
                    <img src={projects.image}className="card-img-top" alt={projects.name}/>
                    <div className="card-body">
                        <h5 className="card-title" href={projects.github}>{projects.name}</h5>
                        <p class="card-text">(projects.tech)</p>
                    </div>
                </div>
            })}
        </div>
    )
}
