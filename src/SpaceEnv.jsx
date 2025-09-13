import { OrbitControls, 
  // useProgress, 
  PerspectiveCamera, Html } from "@react-three/drei";
import { Astronaut } from "./components/Astronaut";
// import { EarthAstronaut } from "./components/EarthAstronaut";
import { Earth1 } from "./components/Earth1";
import { Moon } from "./components/Moon";
// import { MoonCrater } from "./components/MoonCrater";
// import { Sun } from "./components/Sun";
import { SciFiLaptop}  from "./components/SciFiLaptop";
// import { Laptop } from "./components/Laptop";
import { Stars } from "./components/Stars";
import { SciFiBoxes } from "./components/SciFiBoxes";
import { SciFiAmmunitionBox } from "./components/SciFiAmmunitionBox";
import { SciFiAmmunitionBox2 } from "./components/SciFiAmmunitionBox2";
import { useRef } from "react";
// import { SciFiRadar } from "./components/SciFiRadar";

export default function SpaceEnv() {

  // const { progress, active, loaded, total } = useProgress();
  const camRef = useRef();

  return (
    <>
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[0, 0.0, 1.5]}   
        fov={60}
        // near={0.5} // Adjust to model size
        // far={10}
      />
      <directionalLight
        position={[10, 20, 20]}
        intensity={8}
        castShadow
        shadow-mapSize={[2048, 2048]} // Higher = sharper shadows
        shadow-camera-near={0.5}
        shadow-camera-far={50}
      />
      {/* <OrbitControls  /> */}
        <Stars position={[0, 0, -20]} scale={0.3}/>
        {/* <Sun position={[10, 5, 20]}/> */}
        <Earth1 castShadow receiveShadow position={[0, 2, -20]} rotation={[1, 0.8, 0]} scale={0.01}/>
        <Astronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[0, -2.9, 0]} scale={0.15}/>
        {/* <EarthAstronaut castShadow receiveShadow position={[0.08, -0.2, 1.29]} rotation={[5, -3.1, 0]} scale={0.15}/> */}
        <Moon receiveShadow position={[0, -0.165, 0]} scale={2}/>
        <SciFiLaptop castShadoww receiveShadow position={[-0.18, -0.055, 1.24]} rotation={[-0.03, 0.25, 0]} scale={0.25}/>  
        <SciFiBoxes castShadoww receiveShadow position={[-0.8, 0.29, -0.1]} rotation={[0, 0, 0]} scale={0.25}/>           
        <SciFiAmmunitionBox castShadoww receiveShadow position={[-0.8, -0.2, -0.1]} rotation={[0, -0.2, 0]} scale={0.001}/>           
        <SciFiAmmunitionBox2 castShadoww receiveShadow position={[-0.6, -0.12, 0.8]} rotation={[-0.05, 0.5, 0]} scale={0.001}/>           
        <ambientLight intensity={0.25} />
    </>
  );
}