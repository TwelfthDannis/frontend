import React, {Suspense, useEffect, useRef} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";
import {Canvas, useThree} from "@react-three/fiber";

export function ModelComponent(props) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF("/pose.glb");
  const {actions} = useAnimations(animations, group);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  const playAnimation = (animationName) => {
      actions[animationName].play();
  };
  useEffect(() => {
    playAnimation("ArmatureAction.002");
    return () => {
    };
  }, [actions,playAnimation]);

  const materialWithoutDepthWrite = materials.Wolf3D_Avatar.clone();
  materialWithoutDepthWrite.depthWrite = true;
  return (
      <group ref={group} {...props} dispose={null}>
        <group name="Armature">
          <primitive object={nodes.Hips}/>
          <skinnedMesh
              name="Wolf3D_Avatar"
              geometry={nodes.Wolf3D_Avatar.geometry}
              material={materialWithoutDepthWrite}
              skeleton={nodes.Wolf3D_Avatar.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
          />
        </group>
      </group>
  );
}

useGLTF.preload("/pose.glb");

function CameraZoom() {
    const { camera } = useThree();

    useEffect(() => {
        if (camera) {
            camera.position.set(0, 3, 4);
            camera.lookAt(-0.5, 1, -6);
        }
    }, [camera]);
}

export default function PoseModel() {
  return (
      <Canvas>
        <ambientLight intensity={1.5}/>
        <directionalLight position={[1, 0, 3]} intensity={1}/>
        <Suspense fallback={null}>
          <ModelComponent scale={2}/>
        </Suspense>
        <CameraZoom/>
      </Canvas>
  );
}
