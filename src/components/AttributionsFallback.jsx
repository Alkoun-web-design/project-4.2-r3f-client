
import { motion } from "motion/react"
import { LeftChevron, RightChevron, Spinner } from "./Icons";

export default function AttributionsFallback() {

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="text-sm col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 md:col-span-3 lg:col-start-4 lg:col-end-6 row-span-1 md:row-span-2 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
        <p className="font-[Roboto]">Special Thanks to: </p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-4">
                <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm'>
                    <LeftChevron className='h-5 w-5' />
                </div>
                <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm' >
                    <RightChevron className='h-5 w-5' />
                </div>
            </div>
            <div className="mx-auto text-center">
                <Spinner />
            </div>
        </motion.div>
    )
}