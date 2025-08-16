import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import SpaceEnv from "./SpaceEnv";

export default function App() {
  // const currentDate = new Date;
  // const date = currentDate.getFullYear();

  return (
    <div className="font-[Syncopate] h-screen w-full bg-black">
      
      <Canvas shadows>
        <SpaceEnv />
        <Html className="font-[Syncopate] absolute z-20 h-screen w-screen" center>
            <header className="w-88 mt-4 mx-4 px-4 py-2 rounded-full border-1 border-white font-bold bg-[#000000b3] text-white top-0 left-0 hover:bg-white hover:text-[#000000b3] transition-all">
              <h1>ALKOUN WEB DEVELOPMENT</h1>
            </header>
            <div></div>
            {/* <footer className="text-sm bg-[#000000b3] text-white bottom-0 w-screen h-16 px-10 py-4">
              <p>Copyright {date}</p>
            </footer> */}
        </Html>
      </Canvas>
      <Loader />
    </div>
  );
}