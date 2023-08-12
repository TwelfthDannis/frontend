import React, {useState} from "react";
import "../style/project.css";
import screenshot from "./screenshot.png";
import ChairModel from "../3D/Chairmodel"
import github from "../Icons/github.svg"
import website from "../Icons/website.png"

export default function Project() {
    const [activeCard, setActiveCard] = useState(-1);

    const handleMouseEnter = (index) => {
        setActiveCard(index);
        console.log(index)
    };

    const handleMouseLeave = () => {
        setActiveCard(-1);
    };

    const cards = [
        {id: 1, src: screenshot, alt: "Project1"},
        {id: 2, src: screenshot, alt: "Project2"},
    ];
    return (
        <div className="container">
            <div className="modelchair">
                <ChairModel/>
            </div>
            <div className="cards">
                <ul>
                    {cards.map((card, index) => (
                        <li key={card.id} className={'list-item'}>
                            <div className={`card ${activeCard !== -1 && activeCard !== index ? 'card-blur' : ''}`}
                                 onMouseEnter={() => handleMouseEnter(index)}
                                 onMouseLeave={handleMouseLeave}>
                                <div className="src-project">
                                    <img className={'project-image'} src={screenshot} alt="Project1"/>
                                </div>
                                <div className="description">
                                    <h3 className={"name-description"}>Description</h3>
                                    <span>
                                        The site is designed in the style of an online store for the sale of electronics
                                    </span>
                                    <h3 className={'name-description'}>Frameworks</h3>
                                    react
                                </div>
                                <div className="text-strip"/>
                                <div className="icons">
                                    <a href={'#'}><img className={'icon'} src={github} alt="github"/></a>
                                    <a href={'#'}><img className={'icon'} src={website} alt="website"/></a>
                                </div>
                            </div>
                            {index < cards.length - 1 && (
                                <div className="card-strip"/>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
