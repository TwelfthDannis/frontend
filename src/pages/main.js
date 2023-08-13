import React from 'react';
import '../style/main.css';
import TypewriterComponent from 'typewriter-effect';
import Pose from '../3D/Pose.js';
import SphereScene from '../3D/Sphere';

export default function Main() {
    const {options, onInit} = {
        options: {autoStart: true, loop: true},
        onInit: (typewriter) => {
            typewriter
                .typeString('Danny')
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(1500)
                .typeString('Junior developer')
                .pauseFor(1500)
                .start();
        },
    };

    return (
        <div className={'container'}>
            <div className={'message'}>
                <span>
                    Hello
                <span className={'wave'}>👋🏻</span>
                    I'm
                </span>
                <div className={'text'}>
                    <TypewriterComponent options={options} onInit={onInit}/>
                </div>
            </div>
            <div className={'models'}>
                <div className={'sphere'}>
                    <SphereScene/>
                    <div className={'Me'}>
                        <Pose/>
                    </div>
                </div>
            </div>
        </div>
    );
}
