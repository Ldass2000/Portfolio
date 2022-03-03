import React from 'react';
import profile from '../assets/profile.svg';
import Resume from '../assets/LaluResume.pdf';
import tie from '../assets/icons/tie.gif';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';
import location from '../assets/icons/location.png';
import pic from '../assets/mypic.jpeg'


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:dassdazzer143@gmail.com")
    }
    const handletoggle=()=>{        
        
    }
    return (
        <div className="sidebar">
         <img src={pic} alt="avatar" className="sidebar__avatar" />
         <div className="sidebar__name">Lalu<span> Kumar</span> </div>
            <div className="sidebar__item sidebar__title">Mern Stack Developer</div>
            <a href={Resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>     
            <figure className="my-3 sidebar__social-icons">
                <a href="#"><img src={facebook} alt="facebook" className="mr-4 sidebar__icon" /></a>
                <a href="#"><img src={linkedin} alt="instagram" className="mr-4 sidebar__icon" /></a>
                <a href="#"><img src={github} alt="github" className=" sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                    <img src={location} alt="location" className="mr-3 sidebar__icon" />
                    Kolkata, India</div>
                <div className="sidebar__item">kumarlalu.cse@gmail.com</div>
                <div className="sidebar__item">8340648843/7257904463</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
            <div className="sidebar__item sidebar__email" onClick={handletoggle}>Toggle</div>
        </div>
    )
}

export default Sidebar;