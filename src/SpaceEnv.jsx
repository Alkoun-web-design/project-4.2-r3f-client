import { Canvas } from "@react-three/fiber";
import { OrbitControls, 
  // useProgress, 
  Environment, PerspectiveCamera, Center, Html, SpotLight } from "@react-three/drei";
import { Astronaut } from "./components/Astronaut";
import { Earth } from "./components/Earth";
import { Earth1 } from "./components/Earth1";
import { Moon } from "./components/moon";
// import { MoonCrater } from "./components/MoonCrater";
import { Sun } from "./components/Sun";
import { CyberpunkLaptop } from "./components/CyberpunkLaptop";
import { SciFiLaptop}  from "./components/SciFiLaptop";
import { Laptop } from "./components/Laptop";
import { AstronautHelmet } from "./components/AstronautHelmet";
import { Stars } from "./components/Stars";
import { SciFiBoxes } from "./components/SciFiBoxes";
import { SciFiAmmunitionBox } from "./components/SciFiAmmunitionBox";
import { SciFiAmmunitionBox2 } from "./components/SciFiAmmunitionBox2";

// import { SciFiRadar } from "./components/SciFiRadar";

export default function SpaceEnv() {

  // const { progress, active, loaded, total } = useProgress();

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.225, 1.5]}   
        fov={50}
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
      <OrbitControls  />
        <Stars position={[0, 1, 0]} scale={0.2}/>
        {/* <AstronautHelmet castShadow receiveShadow position={[0, 0.075, 1.43]} rotation={[0.3, 3.2, 0]} scale={0.007}/> */}
        {/* <Sun position={[10, 5, 20]}/> */}
        <Earth1 castShadow receiveShadow position={[0, 2, -20]} rotation={[1, 0, 0]} scale={0.01}/>
        <Astronaut castShadow receiveShadow position={[0.1, 0, 1.28]} rotation={[0, -3.1, 0]} scale={0.15}/>
        <Center>
          <Moon receiveShadow position={[0, 62, 0]} scale={2}/>
        </Center>
        {/* <CyberpunkLaptop castShadoww position={[0, 0, 1]} rotation={[0, 2.65, 0]} scale={0.05}/>      */}
        <SciFiLaptop castShadoww receiveShadow position={[-0.18, 0.155, 1.25]} rotation={[-0.03, 0.25, 0]} scale={0.25}/>  
        <SciFiBoxes castShadoww receiveShadow position={[-0.8, 0.5, -0.1]} rotation={[0, 0, 0]} scale={0.25}/>           
        <SciFiAmmunitionBox castShadoww receiveShadow position={[-0.8, 0, -0.1]} rotation={[0, -0.2, 0]} scale={0.001}/>           
        <SciFiAmmunitionBox2 castShadoww receiveShadow position={[-0.6, 0.075, 0.8]} rotation={[-0.05, 0.5, 0]} scale={0.001}/>           
        <ambientLight intensity={0.25} />
    </>
  );
}