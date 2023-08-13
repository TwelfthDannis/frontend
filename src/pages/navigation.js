import '../style/navigation.css'
import {Link} from "react-router-dom";
import {useState} from "react";


export default function Navigation() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };
    return (
        <div className="navigation">
            <div className="navbar">
                <div className="nav">
                    <li className={'list-nav'}>
                        <Link to={'/'} className='navLink' onClick={() => scrollToSection('main-section')}> Home</Link>
                        <div className="block"/>
                    </li>
                    <li className={'list-nav'}>
                        <Link to="/project" className='navLink'
                              onClick={() => scrollToSection('project-section')}> Project</Link>
                        <div className="block"/>
                    </li>
                    <li className={'list-nav'}>
                        <Link to="/certification" className='navLink'
                              onClick={() => scrollToSection('certifications-section')}> Certification</Link>
                        <div className="block"/>
                    </li>
                </div>
            </div>
        </div>
    )
}