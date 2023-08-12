import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import React from "react";

export default function SphereScene() {
    return (
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <directionalLight intensity={1} position={[0,-1,0]}/>
            <ambientLight intensity={2}/>
            <Sphere args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                    color="#9b87ac"
                    distort={0.5}
                    speed={0.6}
                    wireframe={true}
                />
            </Sphere>
        </Canvas>
    );
}