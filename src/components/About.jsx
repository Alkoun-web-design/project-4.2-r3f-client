import { Close } from './Icons'
export default function About({setContent}) {
  return (
    <div className="pb-10 h-auto bg-[#000000b3] px-1 pt-4 border-1 border-gray-100 rounded-md overflow-auto">
      <div className='text-xs text-center w-fit h-fit ml-4 cursor-pointer bg-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}>
          <Close className='p-1' />
      </div>
      <div className="mx-auto justify-center mt-4 mb-4 text-center">
          <h2 className="text-xl">About Me</h2>
      </div>
      <div className="font-[Roboto] px-4 md:px-8 w-auto h-auto md:h-full md:w-160">
        <p classNmae='my-2'>My name is Hassam Sajid and I am a Web Designer and a Full-stack Developer, specifically in ReactJS,
           NodeJs through Express, with experince using various Databases such as MongoDB, MySQL, PostgreSQL and SQLite.  
          I am an ex-lawyer from Pakistan, and ny dissatisfaction with the courts and the justice system led me to Web Development. 
          Right in the middle of a Covid-19 Lockdown in early May 2020, I decided to try out a web development course and start my
           web-development journey.</p>
        <p className='my-2'>I started out learning the basics in HTML, then CSS, and eventually JavaScript and PHP from the "
          Complete Web Developer Course 2.0" from Udemy, taught by Rob Percival. After completing the course, I realized that I 
          needed a certain level of competency in JavaScript that I felt lacking, therefore I picked out "Masterclass in 
          JavaScript", again from Udemy.</p> 
        <p className='my-2'>I eventuallly became proficient in HTML, CSS and JavaScript, yet at the same time there was a continued 
          rise in popularity in NodeJS and a boom in the JavaScript Frameworks landscape. It lead me to try out 11ty with Nunjucks, 
          SolidJS, Astro, NextJS and ofcourse ReactJS.</p>
        <p className='my-2'>I eventually became proficient in HTML, CSS and JavaScript, yet at the same time there was a continued 
          rise in popularity in NodeJS and a boom in the JavaScript Frameworks landscape. It lead me to try out 11ty with Nunjucks, 
          SolidJS, Astro, NextJS and ofcourse ReactJS.</p>
        <p className='my-2'>Along the way I became interested in Augmented and Virtual Reality, and slowly started experimenting 
          with React Three Fiber, and understanding the resourceful use of models in scenes. There is plenty more to learn, and 
          going forward, I believe that incorporating 3d models will increase useer interactions and their overall experience.</p>
      </div>
    </div>
  );
}