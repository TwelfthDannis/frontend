import React from 'react';
import "../style/main.css";
import TypewriterComponent from "typewriter-effect";
import Pose from '../3D/Pose.js'
import SphereScene from "../3D/Sphere";

export default function Main() {
    return (
        <div className="container">
            <div className="message">
                <div className="pre-text">
                    Hello
                    <span className="wave">
                        👋🏻
                    </span>
                    I'm
                </div>
                <div className="text">
                    <TypewriterComponent
                        options={{autoStart: true, loop: true}}
                        onInit={(typewriter) => {
                            typewriter.typeString('Danny').pauseFor(1500).deleteAll().pauseFor(1500).typeString('Junior developer').pauseFor(1500).start();
                        }}
                    />
                </div>
            </div>
            <div className="models">
                <div className="sphere">
                    <SphereScene />
                    <div className="Me">
                        <Pose/>
                    </div>
                </div>
            </div>
        </div>
    );
}

