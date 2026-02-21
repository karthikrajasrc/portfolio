import html from "../assets/images/html.svg"
import css from "../assets/images/csslogo.svg"
import js from "../assets/images/jslogo.svg"
import tailwind from "../assets/images/tailwind.svg"
import react from "../assets/images/react.svg"
import node from "../assets/images/node.svg"
import express from "../assets/images/express.svg"
import mongodb from "../assets/images/bd.svg"
import git from "../assets/images/git.svg"

const Skills = () => {
  return (
    <>
    <div id='skills'>
      <h1 className='skills-header'>Skills</h1>
      </div>
      <div className="skills-logo">
        <img src={html}></img>
        <img src={css}></img>
        <img src={js}></img>
        <img src={tailwind}></img>
        <img src={react}></img>
        <img src={node}></img>
        <img src={express}></img>
        <img src={mongodb}></img>
        <img src={git}></img>
      </div>
    </>
  )
}

export default Skills
