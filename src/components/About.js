import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  //console.log(props.bio);

  //const aboutBio = props.bio;

  function bioText() {
    if (props.bio === "" || !props.bio) {
      //console.log(aboutBio);
      return null;
    } else {
      return <p>{props.bio}</p>;
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioText()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
