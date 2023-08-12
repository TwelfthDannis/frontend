import {Canvas} from "@react-three/fiber";
import {Stars} from "@react-three/drei";

export default function StarsBack(){
    return(
        <Canvas>
            <Stars depth={200} fade={true}/>
        </Canvas>
    )
}