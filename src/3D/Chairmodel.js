
import React, {Suspense, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {Canvas, useThree} from "@react-three/fiber";

export function ModelChairComponent(props) {
    const group = useRef()
    const {nodes, materials, animations} = useGLTF('/chairmodel.glb')
    const {actions} = useAnimations(animations, group)
    const materialWithoutDepthWrite = materials.Wolf3D_Avatar.clone();
    materialWithoutDepthWrite.depthWrite = true;
    useEffect(()=>{
        actions[animations[0].name].play()
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" position={[0, 0.962, 0]}>
                    <primitive object={nodes.Hips}/>
                    <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry}
                                 material={materialWithoutDepthWrite} skeleton={nodes.Wolf3D_Avatar.skeleton}
                                 morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
                                 morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}/>
                </group>
                <group name="OfficeChair_LP" position={[0, 0.039, -0.069]} rotation={[Math.PI / 2, 0, 0]} scale={0.011}>
                    <mesh name="ChairBack_LP" geometry={nodes.ChairBack_LP.geometry} material={materials.lambert1}
                          position={[0, -18.108, -81.202]}/>
                    <mesh name="ChairSeat_LP4" geometry={nodes.ChairSeat_LP4.geometry} material={materials.lambert1}
                          position={[0, 9.587, -41.973]}/>
                    <mesh name="Leg_LP1" geometry={nodes.Leg_LP1.geometry} material={materials.lambert1}
                          position={[-24.795, 23.885, -4.251]}/>
                    <mesh name="Leg_LP2" geometry={nodes.Leg_LP2.geometry} material={materials.lambert1}
                          position={[-24.776, -12.13, -4.251]} rotation={[0, 0, 1.257]}/>
                    <mesh name="Leg_LP3" geometry={nodes.Leg_LP3.geometry} material={materials.lambert1}
                          position={[9.482, -23.242, -4.251]} rotation={[0, 0, 2.513]}/>
                    <mesh name="Leg_LP4" geometry={nodes.Leg_LP4.geometry} material={materials.lambert1}
                          position={[30.637, 5.906, -4.251]} rotation={[0, 0, -2.513]}/>
                    <mesh name="Leg_LP5" geometry={nodes.Leg_LP5.geometry} material={materials.lambert1}
                          position={[9.453, 35.032, -4.251]} rotation={[0, 0, -1.257]}/>
                    <mesh name="pCube37" geometry={nodes.pCube37.geometry} material={materials.lambert1}
                          position={[-33.934, -2.01, -55.05]} scale={[0.061, 0.062, 0.036]}/>
                    <mesh name="pCube38" geometry={nodes.pCube38.geometry} material={materials.lambert1}
                          position={[33.951, -2.01, -55.05]}/>
                    <mesh name="pCylinder25" geometry={nodes.pCylinder25.geometry} material={materials.lambert1}
                          position={[-26.831, 26.547, 2.029]} rotation={[0, 0, -3.028]}/>
                    <mesh name="pCylinder26" geometry={nodes.pCylinder26.geometry} material={materials.lambert1}
                          position={[33.277, 6.329, 2.029]} rotation={[0, 0, -0.895]}/>
                    <mesh name="pCylinder27" geometry={nodes.pCylinder27.geometry} material={materials.lambert1}
                          position={[9.794, 39.113, 2.029]} rotation={[0, 0, -1.2]}/>
                    <mesh name="pCylinder28" geometry={nodes.pCylinder28.geometry} material={materials.lambert1}
                          position={[11.173, -25.801, 2.029]} rotation={[0, 0, -2.65]}/>
                    <mesh name="pCylinder29" geometry={nodes.pCylinder29.geometry} material={materials.lambert1}
                          position={[-27.082, -13.391, 2.029]} rotation={[0, 0, -2.647]}/>
                    <mesh name="Underside_LP" geometry={nodes.Underside_LP.geometry} material={materials.lambert1}
                          position={[-0.62, 6.643, -25.205]}/>
                    <mesh name="Wheel_LP" geometry={nodes.Wheel_LP.geometry} material={materials.lambert1}
                          position={[-26.495, 26.783, 0.105]} rotation={[0, 0, -3.028]}/>
                    <mesh name="Wheel_LP1" geometry={nodes.Wheel_LP1.geometry} material={materials.lambert1}
                          position={[32.898, 6.487, 0.105]} rotation={[0, 0, -0.895]}/>
                    <mesh name="Wheel_LP2" geometry={nodes.Wheel_LP2.geometry} material={materials.lambert1}
                          position={[9.48, 39.377, 0.111]} rotation={[0, 0, -1.2]}/>
                    <mesh name="Wheel_LP3" geometry={nodes.Wheel_LP3.geometry} material={materials.lambert1}
                          position={[11.398, -25.457, 0.105]} rotation={[0, 0, -2.65]}/>
                    <mesh name="Wheel_LP4" geometry={nodes.Wheel_LP4.geometry} material={materials.lambert1}
                          position={[-26.858, -13.046, 0.105]} rotation={[0, 0, -2.647]}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/chairmodel.glb')

function CameraZoom() {
    const { camera } = useThree();

    useEffect(() => {
        if (camera) {
            camera.position.set(0, 2, 3);
            camera.lookAt(-0.5, 0, -1);
        }
    }, [camera]);
}
export default function ChairModel() {
    return (
        <Canvas>
            <ambientLight intensity={2}/>
            <directionalLight intensity={3}/>
            <Suspense fallback={null}>
                <ModelChairComponent scale={1.5}/>
            </Suspense>
            <CameraZoom/>
        </Canvas>
    )
}