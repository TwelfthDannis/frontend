
import React, {Suspense, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {Canvas, useThree} from "@react-three/fiber";

export function StudyComponent(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/study.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions[animations[0].name].play()
  })

  const materialWithoutDepthWrite = materials.Wolf3D_Avatar.clone();
  materialWithoutDepthWrite.depthWrite = true;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.002, 0.894, 0.078]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
        </group>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -0.002]} scale={[0.007, 0.008, 0.009]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="ChairMetal_L" position={[-3.237, -1.01, -21.611]} rotation={[-0.177, 0, 0]} scale={[1.019, 1.016, 0.887]}>
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials.ChackerMat} position={[0.002, 6.464, 1.159]} />
            </group>
            <group name="ChairWood_L" position={[-3.237, -1.01, -21.611]} rotation={[-0.177, 0, 0]} scale={[1.019, 1.016, 0.887]}>
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials.ChackerMat} />
            </group>
          </group>
        </group>
        <group name="book_a_open" position={[0.112, 0.941, -0.013]} rotation={[-0.804, 1.56, -0.388]} scale={0.013}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.book_a} />
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials.book_a_pages} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/study.glb')

function CameraZoom() {
  const { camera } = useThree();

  useEffect(() => {
    if (camera) {
      camera.position.set(1.5, 2.5, 3.4);
      camera.lookAt(-2, 0, -6);
    }
  }, [camera]);
}

export default function StudyModel(){
  return(
      <Canvas>
        <ambientLight intensity={1}/>
        <directionalLight intensity={1.5}/>
        <Suspense fallback={null}>
          <StudyComponent scale={2.7}/>
        </Suspense>
        <CameraZoom/>
      </Canvas>
  )
}