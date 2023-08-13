import '../style/certification.css'
import StudyModel from "../3D/Study";
import java from "../certifications/1.jpg"
import screenshot from "./screenshot.png";
import React, {useState} from "react";

export default function Certification({showSticky, setShowSticky}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

    const openModal = (image) => {
        setShowModal(true);
        setShowSticky(false);
        setSelectedImage(image);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowSticky(true);
    };

    const cards = [
        {id: 1, src: screenshot, alt: "Project1"},
        {id: 2, src: screenshot, alt: "Project2"},
    ];
    return (
        <div className="container1">
            <div className="cards">
                <ul>
                    {cards.map((card, index) => (
                        <li className={'list-item'} key={card.id}>
                            <div className="box">
                                <div className="certification-image">
                                    <img className={'image'} src={java} alt={'java-cerification'} onClick={() => openModal({ src: java, alt: 'java-cerification' })}/>
                                </div>
                                <div className="description">
                                    <h3 className={"name-description"}>University</h3>
                                    <span>
                                        Plekhanov Russian University of Economics
                                    </span>
                                    <h3 className={'name-description'}>Program</h3>
                                    Fullstack - development in Java
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="StudyModel">
                <StudyModel/>
            </div>
            {showModal && (
                <div className="modal" onClick={closeModal}>
                    <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: "100%", cursor: "zoom-out" }} />
                </div>
            )}
        </div>
    )
}