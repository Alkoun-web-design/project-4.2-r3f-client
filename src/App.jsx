import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import SpaceEnv from "./SpaceEnv";
import { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
// import Contact from "./components/Contact";

export default function App() {
  // const currentDate = new Date;
  // const date = currentDate.getFullYear();

  const [content, setContent] = useState('none');

  return (
    <div className="font-[Syncopate] h-screen w-full bg-black">
      <Canvas shadows>
        <Html className="absolute z-20 h-screen w-screen text-gray-100" center>
          <header className="flex flex-row h-12 mx-4 px-4 py-3 rounded-full border-b-1 border-gray-100 font-bold bg-[#0000007f]">
            <h1 className="justify-start inline cursor-pointer" onClick={() => setContent('none')}>AWDev</h1>
            <div className="mx-auto">
              <ul className="flex jusitfy-end text-xs md:text-md">
                <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('projects')}>Projects</li>
                <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('about')}>About AWD</li>
                {/* <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('contact')}>Contact</li> */}
              </ul>
            </div>
            <div className="hidden md:flex flex-row ml-auto">
              <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="my-1 mx-4 h-6 w-6"><img src="/images/github-logo-wht.svg" /></a>
              <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="my-1 mx-4 h-6 w-6"><img src="/images/linkedin-logo-wht.svg" /></a>
              <a href="" rel="noreferrer noopener" target="_blank" className="my-1 mx-4 h-6 w-6"><img src="/images/facebook-logo-wht.svg" /></a>
            </div>
          </header>
          <div className="mx-auto text-sm font-[Roboto] bg-[#1b1b1b] md:rounded-full px-4 py-1 w-fit">
            Permafrost - Scott Buckley
            <audio className="md:inline bg-[#00000000]" src="/audio/scott-buckley-permafrost(chosic.com).mp3" controls autoPlay loop></audio>
          </div>
          <div className="flex justify-center mt-6">
            {content === 'projects' && <Projects setContent={setContent} />}
            {content === 'about' && <About setContent={setContent} />}
            {/* {content === 'contact' && <Contact />} */}
            {content === 'none' && null}
          </div>
          {/* <div className="text-xs left-0 my-4 bg-[#000000b3] rounded-full h-80 border-1 border-white w-16">
            <ul>
              <li className="my-4">Projects</li>
              <li className="my-4">About AWD</li>
              <li className="my-4">Contact</li>
            </ul>
          </div> */}
          {/* <footer className="text-sm bg-[#000000b3] text-white bottom-0 w-screen h-16 px-10 py-4">
            <p className="font-[Roboto]">Special thanks to: </p>
          </footer> */}
          
        </Html>
        <SpaceEnv />
      </Canvas>
      <Loader />
    </div>
  );
}