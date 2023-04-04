import React from "react";
import avatar from '../images/avatar_hi.jpg';

function About() {
  return (
    <div className="row">
      <h1>Jessica Hong</h1>
      <div className="col">
        <img src={avatar} className="avatar" alt="jess avatar" />
      </div>
      <div className="col">
        <h2>A little bit about me: </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default About;