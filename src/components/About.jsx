import { Close } from './Icons'
export default function About({setContent}) {
  return (
    <div className="pb-10 h-auto bg-[#000000b3] px-1 pt-4 border-1 border-gray-100 rounded-md">
      <div className='text-xs text-center w-fit h-fit ml-4 cursor-pointer bg-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}>
          <Close className='p-1' />
      </div>
      <div className="mx-auto justify-center mt-4 mb-4 text-center">
          <h2 className="text-xl">About Me</h2>
      </div>
      <div className="font-[Roboto] px-4 md:px-8 w-auto h-auto md:h-full md:w-160">
        <p className='my-2'>I started my web-development journey in 2020, right after the Covid-19 pandemic.</p>
      </div>
    </div>
  );
}