import { motion } from "motion/react"
import { LeftChevron, RightChevron, Dot, Spinner } from "./Icons";

export default function GetInTouchFallback() { 

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-2 sm:col-end-7 md:col-span-3 lg:col-start-2 lg:col-end-4 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
            <p className="font-[Roboto]">Get in touch with me:</p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-2">
                <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm'>
                    <LeftChevron className='h-5 w-5' />
                </div>
                <motion.a 
                    href="/" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="mx-1 rounded-sm hover:-translate-y-1 duration-300 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                </motion.a>
                <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm' >
                    <RightChevron className='h-5 w-5' />
                </div>
            </div>
            <div className="text-center">
                <p className="font-[Roboto] inline-block align-middle"></p>
            </div>
            <div className="mx-auto text-center">
                <Spinner />
            </div>
        </motion.div>
    )
}
