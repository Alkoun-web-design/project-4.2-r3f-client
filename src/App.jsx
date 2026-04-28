import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei"
import {useState, lazy, Suspense} from "react";
// const LoaderComponent = lazy(() => import("./components/LoaderComponent"))
const SpaceEnv3 = lazy(() => import("./components/SpaceEnv3"));
// const Canvas = lazy(() => import('./components/CanvasComponent'))
const MusicPlayer = lazy(() => import("./components/MusicPlayer"))
import MusicPlayerFallback from "./components/MusicPlayerFallback"
const Attributions = lazy(() => import("./components/Attributions"))
import AttributionsFallback from "./components/AttributionsFallback"
const MyProjects = lazy(() => import("./components/MyProjects"))
import MyProjectsFallback from "./components/MyProjectsFallback"
const GetInTouch = lazy(() => import("./components/GetInTouch"))
import GetInTouchFallback from "./components/GetInTouchFallback";
import { AnimatePresence } from "motion/react"
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import { Earth } from "./components/Icons";

export default function App() {
  const today = new Date;
  today.getFullYear();

  const [showSpace, setShowSpace] = useState(false);

  return (
    <>
    <div className="grid grid-cols-12 grid-rows-none md:grid-rows-12 gap-2 md:gap-4 lg:gap-6 font-[Syncopate] text-gray-100 h-full md:h-screen w-full overflow-auto">
      <header className="col-span-full row-span-1 font-bold justify-items-center">
        <Suspense fallback={<MusicPlayerFallback/>}>
          <MusicPlayer />
        </Suspense>
        <button onClick={() => setShowSpace(prev => !prev)} className="m-2 md:m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
          {showSpace ? "Portfolio" : "Show Earth"}
          <Earth />
        </button>
      </header>
        <AnimatePresence>
          { !showSpace && (   
            <>     
              <Hero />
              <AboutMe />
              <Suspense fallback={<GetInTouchFallback />}>
                <GetInTouch />
              </Suspense>
              <Suspense fallback={<AttributionsFallback />}>
                <Attributions />
              </Suspense>
              <Suspense fallback={<MyProjectsFallback />}>
                <MyProjects />
              </Suspense>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="fixed top-0 -z-10 h-screen w-full  bg-black">
      {/* <div className="fixed top-0 h-screen w-full  bg-black"> */}
        <Canvas shadows>
          <Suspense fallback={null} >
            <SpaceEnv3 />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
}