import React, { useState } from 'react';
import data_projects from './data/Projects_data'
import Projectcard from './Projectcard';


const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('express.js')}>Express</div>
                <div onClick={() => handleFilterCategory('Javascript')}>Javascript</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <Projectcard key={project.name} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;