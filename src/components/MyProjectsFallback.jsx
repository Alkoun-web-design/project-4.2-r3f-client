import { LeftChevron, RightChevron, Spinner } from "./Icons";
import { motion } from 'motion/react';

export default function MyProjectsFallback(){

    return (
        <>
        <motion.div           
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-subgrid col-start-2 col-end-12 md:col-span-5 lg:col-start-2 lg:col-end-6 md:row-span-6 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-sm overflow-auto"
        >
            <div className="col-span-full m-2">
                <h3 className="text-xl">Freelance Projects</h3>
            </div>
            <div className='col-span-full text-center justify-items-center font-[Roboto] align-start'>
                <Spinner />
                <div className="flex flex-row mx-auto my-2">
                    <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm'>
                        <LeftChevron className='h-6 w-6' />
                    </div>
                    <div className='text-sm rounded-sm mx-auto mb-4 px-2 py-1 w-fit text-center bg-gray-900 hover:bg-gray-100 hover:text-black transition:all ease-in-out duration-300'>
                                       
                    </div>
                    <div className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer rounded-sm' >
                        <RightChevron className='h-6 w-6' />
                    </div>
                </div>
                <Spinner />
            </div>
        </motion.div>
        <motion.div           
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-subgrid col-start-2 col-end-12 md:col-span-7 lg:col-start-6 lg:col-end-12 row-span-6 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-sm overflow-auto"
        >
            <div className="col-span-full font-[Roboto] align-start">

                <motion.div           
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className=''>
                    <p>Status: </p> 
                    <p className="m-2">Tech Stack: 
                    </p>
                    <div>
                        <p className="m-2">About Project:</p>
                        <Spinner/>
                    </div>
                </motion.div>
            </div>
        
        </motion.div>
        </>
    )
}