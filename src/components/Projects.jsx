import { useState } from 'react';
import ChevronLeft from '/images/bx_chevron-left-circle.svg';
export default function Projects(){

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
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-10-eye-analyzer.vercel.app/'
        },
        {
            name: 'Mind Muscles placeholder website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://project-10-eye-analyzer.vercel.app/'
        },
        {
            name: 'Mind Muscles Academy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is a placeholder website made until the original website finishes. The project was for a education business Mind Muscles Academy, and this website, as well as the future one were built using React.</p> 
                <p className="m-2">There is not much to add to the content of the website as it stands to inform incoming traffic on contacting the business.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS, NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mindmuscles.net/'
        },
        {
            name: 'Ecommerce website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS, MedusaJS',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Apex Synergy website',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS',
            status: 'In-development',
            githubLink: '',
            hostLink: 'https://project-14-as-react.netlify.app/'
        },
        {
            name: "Mariam's Portfolio website",
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS',
            status: 'Complete',
            githubLink: '',
            hostLink: 'https://mariamshawki.netlify.app/'
        },
        {
            name: 'Mistral AI Chatbot webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Mistral AI',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Form Filler webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'ReactJS, NodeJS, Qwen-2.5VL (llama)',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Email handling webserver',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'NodeJS',
            status: 'Complete',
            githubLink: '',
            hostLink: ''
        },
        {
            name: 'Ecommerce webapp',
            description: <div className='mx-2 mt-2 mb-4'> 
                <p className="m-2">This is an e-commerce site, selling one or two products, built on Shopify's Headless Commerce framework: Hydrogen</p> 
                <p className="m-2">The store is based on an exosting Hydrogen e-commerce template, that required a few specific edits and changes. Unfortunately, since the website was made a few years ago, some of the dependencies have become outdated, and uploading the latest version could break the website.</p>
                <p className="m-2">The Hyrogen framework is based on the Remix platform, however i did not spend too much time understanding the idiosyncracies of Remix, and it is going through yet another change.</p>
            </div>,
            stack: 'NextJS, MedusaJS',
            status: 'In-development',
            githubLink: '',
            hostLink: ''
        },

    ]

    const [index, setIndex] = useState(0)

    return(
        <div className="absolute z-20 bg-[#000000b3] px-8 pt-4 border-1 border-gray-100 rounded-md">
            <div className="mx-auto my-8 text-center">
                <h2>Projects</h2>
            </div>
            <div className="font-[Roboto] flex flex-row justify-center align-middle">
                <div onClick={() => {index === 0 ? setIndex(projects.length-1) : setIndex(index-1)}} className='rounded-full bg-gray-500 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 cursor-pointer'>
                    <img src="/images/bx_chevron-left-circle.svg" />
                </div>
                <div className="text-sm mx-4 w-120">
                    <div className='rounded-md mx-auto mb-4 px-2 w-fit border-1 border-gray-100 text-center hover:bg-gray-100 hover:text-black transition:all ease-in-out duration-300'>
                        <a href={projects[index].hostLink} ><h3 className="text-lg m-1">Project: {projects[index].name}</h3></a>
                    </div>
                    <p className={`${projects[index].status === 'Complete' ? 'text-green-400 m-2' : 'text-orange-500 m-2'}`}>Status: {projects[index].status}</p>
                    <p className="m-2">Stack: {projects[index].stack}</p>
                    <div>
                        <p className="m-2">About Project:</p>{projects[index].description}
                    </div>
                    <div className='m-2'>
                        <a href={projects[index].githubLink}>Github Link</a>
                    </div>
                </div>
                <div onClick={() => {index === projects.length-1 ? setIndex(0) : setIndex(index+1)}} className='rounded-full bg-gray-500 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-4 my-2 cursor-pointer' >
                    <img src="/images/bx_chevron-right-circle.svg" />
                </div>
            </div>
        </div>
    )
}