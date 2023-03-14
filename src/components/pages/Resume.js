import React from "react";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Download my <a href="#resume">resume</a></p>
      <h2>Front-End Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
      <h2>Back-End Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;