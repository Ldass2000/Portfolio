import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';

const About = () => {

    const skills = [
        {
            icon: computer,
            title: "Frontend Development",
            about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
        },
        {
            icon: repair,
            title: "Backend  Development",
            about: "handle database, server, api using  Node js , express js and MongoDb",
        },
        {
            icon: api,
            title: "API Development",
            about: "I can develop REST Full API using Node js "
        },
        {
            icon: algo,
            title: "Competitive Coder",
            about: "a daily problem solver in HackerRank and Geeks for geeks"
        },
        {
            icon: puzzle,
            title: "UI/UX designer",
            about: "minimalistic user interface designer using figma and  framer"
        },
        {
            icon: computer,
            title: "Extra carriculam",
            about: "Enjoying music in extra Time and reading  famous nobel "
        },
    ]

    return (
        <div className="about">
        <h6 className="about__intro">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Malout Institute of Management and Information Technology. I have 2+ years of experience in
        MERN Developement.
        </h6>
        <div className="container about__container">
            <h6 className="about__heading">What I offer</h6>
            <div className="row">
                {
                    skills.map(skill =>
                        <Skillcard skill={skill} />
                    )
                }
            </div>
        </div>
    </div>
    )
}

export default About
