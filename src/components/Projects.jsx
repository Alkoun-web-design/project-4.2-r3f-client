import { useState } from 'react';
import { LeftChevron, RightChevron, Link, Close } from "./Icons";
export default function Projects({setContent}){

    const projects = [
        {
            name: 'Counselling with Iqra',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A business website with blogging capabilities for the admin. It was originally created using HTML, CSS and vanilla JS and PHP.</p> 
                <p className="m-2">The website was structured as a wordpress theme and deployed on wordpress.</p>
                <p className='m-2'>The website was later redesigned and re-developed to an 11ty project to preserve the blogging capabilities </p>
            </div>,
            stack: '11ty',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-1-cwi-11ty.netlify.app/'
        },
        {
            name: 'Stellar Services International',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple business website, developed using the Divi Builder on wordpress. The business website is a subsidiary of the Canam Steel Pvt Ltd.</p> 
                <p className="m-2">The current version of the website was re-designed after taking a web desgining course from udemy.</p>
            </div>,
            stack: 'Wordpress',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://stellarservices.international/'
        },
        {
            name: 'Art Gallery Website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A website for displaying art from various users. The website was built purely on HTML, CSS and JavaScript.</p> 
                <p className="m-2">The website was left incomplete at its inception, as the persons involved decided to move onto other endeavours.</p>
            </div>,
            stack: 'HTML, CSS, JS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://incomparable-naiad-ada14b.netlify.app/'
        },
        {
            name: 'Alkoun web design website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">My portfolio website, also built purely on HTML, CSS and JavaScript.</p> 
                <p className="m-2">There were ambitions of designing the website with 3D models.</p>
            </div>,
            stack: 'HTML, CSS, JS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://alkounwebdesigns.netlify.app/'
        },
        {
            name: 'AWDev website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A redesinged portfolio website, built using React and React Three Fiber.</p> 
                <p className="m-2">The project started years ago, however i returned to complete it as my comfort with react had grown tremendously in recent years and projects.</p>
                <p className="m-2">The use of animations, custom models with custom textures, and optimized 3d models, along with familiarity with drei tools are all areas ripe for further improvement and mastery.</p>
            </div>,
            stack: 'React 3 Fiber',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://awdev.netlify.app/'
        },
        {
            name: 'Saeed & Sons Ecommerce website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">My first React website and my first E-commerce website, built using React, MUI and MedusaJS with postgresql db.</p> 
                <p className="m-2">The project was built for a business client, however I lost the client to another e-commerce developer.</p>
                <p className="m-2">Even though losing the client was rough, It was a great achievemnet to develop something in React when i still didnt understand it will. This gave me greater confidence to continue learning and incorporating react.</p>
            </div>,
            stack: 'React and MedusaJS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-5-ochre.vercel.app/'
        },
        {
            name: 'Birthday wishing website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">My first React Three Fiber website, it was originally designed to wish someone personally on their birthday.</p> 
                <p className="m-2">The scene was originally inside a cafe with balloons, two cakes, and people seated at their tables. Another building was visible through the window from across the street.</p>
                <p className="m-2">I later redesigned the scene to have fewer models, with smaller sizes and animations, with the aim of communicating a joyous birthday get together. This resulted in better loading times, better performance, and a better undertanding of implmenting a message using a scene with the least amount of 3d assets.</p>
            </div>,
            stack: 'React 3 Fiber',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-6-r3f-birthday.netlify.app/'
        },
        {
            name: 'AARC website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple website for a team of psychologists and psychotherapists starting their business. The website was built using HTML, CSS and JavaScript on the frontend, and for the first time, NodeJs on the backend to validate and accept form submissions, whilst serving static files.</p> 
                <p className="m-2">The design was rudimentary as there was a certain deadline by which the team wanted the website to be up and active, with the most important aspect of the website being that visitors could submit forms to the team.</p>
                <p className="m-2">There was a dire need to improve the design of the website, and possibly introduce more dynamic and interactivbe elements.</p>
            </div>,
            stack: 'HTML, CSS, JS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'AARC website re-designed',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The website for AARC was re-designed a year later using tailwindcss, templates, and also incoprorating animations through state management using AplpineJS.</p> 
                <p className="m-2">Many of the same functionality was carried over regarding the handling of forms, and the NodeJS server.</p>
                <p className="m-2">Depending on future changes in functionality, the project could be moved to React.</p>
            </div>,
            stack: 'AlpineJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'http://aarctherapy.com/'
        },
        {
            name: 'Binance Cryptocurrency Table',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A personal project, built using SolidJS for performance on the frontend.</p> 
                <p className="m-2">The project's goal was to display real-time data from Binance, and to provide a surge percentage of coins that had risen in value. Data was generated using weebsocket connections, and the project gave me a firm grip and understanding on manipulating data.</p>
                <p className="m-2">The project later evolved from simply on the browser, to performing calculations and data gathering on a NodeJs server, with a React frontend to dispaly the results.</p>
            </div>,
            stack: 'SolidJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-9-client.netlify.app/'
        },
        {
            name: 'Cryptocurrency Project',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">An improvement from the previous project, built using ReactJS and NodeJS with typescript on the backend.</p> 
                <p className="m-2">The project was my first implementation of typescript, on the server or otherwise. It also made me aware of peformance bottlenecks.</p>
                <p className="m-2">The project has now prompted me to learn Golang as a much more performant and resource efficient language that can be more useful for a project such as this.</p>
            </div>,
            stack: 'ReactJS, NodeJS',
            status: 'In-development',
            githubLink: '',
            hostLink: '#'
        },
        {
            name: 'Eye Analyzing Tool website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'HydrogenJS, Shopify',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-10-eye-analyzer.vercel.app/'
        },
        {
            name: 'Mind Muscles placeholder website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is a surface level placeholder website for the Mind Muscles Academy business.</p> 
                <p className="m-2">It was Built using React and TailwindCSS.</p> 
            </div>,
            stack: 'ReactJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-10-eye-analyzer.vercel.app/'
        },
        {
            name: 'Mind Muscles Academy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The complete website for the Mind Muscles Academy business. The frontend was developed using React while the backend relies on NodeJS and Express, with a MySQL Database.</p> 
                <p className="m-2">The project went through several iterations in development. It started out as an Astro project using a SQLite Database, with a custom frontend designed by a graaphics designer.</p>
                <p className="m-2">With the demands of inserting users, and a content management system, React and NodeJs were ultimately chosen for development and production, The project solidified principles and strategies regarding React rendering, using React Router, and NodeJs routes and sessions.</p>
            </div>,
            stack: 'ReactJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mindmuscles.net/'
        },
        // {
        //     name: 'Ecommerce website',
        //     description: <div className='mx-2 mt-2 mb-4'> 
        //         <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
        //         <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
        //         <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
        //     </div>,
        //     stack: 'ReactJS, MedusaJS',
        //     status: 'In-development',
        //     githubLink: '',
        //     hostLink: ''
        // },
        {
            name: 'Apex Synergy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple website for a software outsourcing business, built on React, TailwindCSS and PHP.</p> 
                <p className="m-2">The website was first developed in AlpineJS, however, the business wanted a blogging section aswell.</p>
                <p className="m-2">The wensite is curretly under active development</p>
            </div>,
            stack: 'ReactJS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-14-as-react.netlify.app/'
        },
        {
            name: "Mariam's Portfolio website",
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A relatively simple portfolio website for a professional built on React and TailwindCSS.</p> 
                <p className="m-2">Templates were used to quickly develop the website for being used by the professional.</p>
                <p className="m-2">Further improvemments for the website include utilizing React Three Fiber, and particlualrly low-poly isometric 3d models.</p>
            </div>,
            stack: 'ReactJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mariamshawki.netlify.app/'
        },
        {
            name: 'Mistral AI Chatbot webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The project is built using React and Tailwind on the frontend, and NodeJS on the backend.</p> 
                <p className="m-2">The idea was to buitl a chatbot using the provided by MistralAI, however imporvements are still required in the project, i.e. using streaming, database, and parsing amrkdown.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Mistral AI',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Form Filler webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">The project was built on React, NodeJS, Qwen2.5VL, A visual language model through the use of llama.</p> 
                <p className="m-2">The idea behind the app was to allow users to fill out their forms by using AI to match the data required for forms. The app could gather data from past documents, or images of documents. Images would be parsed by the AI and text would be extracted.</p>
                <p className="m-2">Currently the App is in development, and requires further refinement.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Qwen-2.5VL (llama)',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Email handling webserver',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">A simple NodeJS and express server built to handle emails from personal websites.</p> 
                <p className="m-2">The project uses nodemailer, however due to the recent inclusion of domain verification for sending emails through popular services, it has become essential to own a domain to be able to sebd emails.</p>
                <p className="m-2">The project is not functional until or unless a domain is bought to allow emails to be verified.</p>
            </div>,
            stack: 'NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Ecommerce webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">An ecommerce store built using NextJS and MedusaJS.</p> 
                <p className="m-2">The e-commerce store is currently a template and no specific change shave been made yet.</p>
                <p className="m-2">The project should provide practice for NextJS, and developed React framework, and MedusAJS specifically for the backend and managing the E-commerce store.</p>
            </div>,
            stack: 'NextJS, MedusaJS',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },

    ]

    const [index, setIndex] = useState(0)

    return(
        <div className="pb-10 h-auto bg-[#000000b3] px-1 pt-4 border-1 border-gray-100 rounded-md">
            <div className='text-xs text-center w-fit h-fit ml-4 cursor-pointer bg-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}>
                <Close className='p-1' />
            </div>
            <div className="mx-auto justify-center mt-4 mb-4 text-center">
                <h2 className="text-xl">Projects</h2>
            </div>
            <div className='text-center mt-4 mb-8'>
                {projects.map((project, i) => (
                    <p key={i} className={`${ i - 1 < index ? 'inline mx-1 text-gray-100 select-none text-sm md:text-lg' : 'inline mx-1 text-gray-600 select-none text-sm md:text-lg' }`}>__</p>
                ))}
            </div>
            <div className="font-[Roboto] px-4 md:px-8 w-auto h-auto md:h-full md:w-160">
                
                <div className="flex flex-row mx-auto">
                    <div onClick={() => {index === 0 ? setIndex(projects.length-1) : setIndex(index-1)}} className='bg-gray-600 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer'>
                        <LeftChevron className='h-6 w-6' />
                    </div>
                    <div className='rounded-sm mx-auto mb-4 px-2 py-1 w-fit text-center bg-gray-600 hover:bg-gray-100 hover:text-black transition:all ease-in-out duration-300'>
                        {/* <a href={projects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline text-lg m-1">{projects[index].name}</h3> <img className="inline h-5 w-5 mb-1" src="/images/bx_link-external.svg"/></a> */}
                        <a href={projects[index].hostLink} target="_blank" rel="noreferrer noopener" ><h3 className="inline text-lg m-1">{projects[index].name}</h3> <Link /></a>                    
                    </div>
                    <div onClick={() => {index === projects.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-600 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 my-2 cursor-pointer' >
                        <RightChevron className='h-6 w-6' />
                    </div>
                </div>

                <div className=''>
                    <p className={`${projects[index].status === 'Complete' ? 'text-green-400 m-2' : 'text-orange-500 m-2'}`}>Status: {projects[index].status}</p>
                    <p className="m-2">Stack: {projects[index].stack}</p>
                    <div>
                        <p className="m-2">About Project:</p>{projects[index].description}
                    </div>
                    {/* <div className='m-2'>
                        <a href={projects[index].githubLink} target="_blank" rel="noreferrer noopener">Github Link</a>
                    </div> */}
                </div>

            </div>
        </div>
    )
}