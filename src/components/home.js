import React, { Component } from 'react';
import  {useState} from 'react';
import Company from './company';
import Missionvission from './missionvission';
import Team from './team';
import Testimonial from './testimonial';
import heroImage from '../images/hero.png';
import devloopsabtcompany from '../img/devloopsabtcompany.jpeg';
import erp from '../img/erp.png';


const Home = () => {

    const [dynamicContent, setDynamicContent] = useState({
        title: 'Our Services',
        para: 'Innovative Software Solutions for Your Success',
        listItems: [
          'Product Development',
          'Web application',
          'Internet Of Things',
        ],
        description: 'We collaborate closely with businesses of all sizes, employing a strategic approach to address challenges and capitalize on opportunities. Whether you seek streamlined processes, enhanced productivity, or a digital transformation.',
      });
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Revolutionizing <span className="text-pink-500">Industries</span> with Smart Software Solutions
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Elevate Your Business with Intelligent Software Solutions
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/themesberg/landwind"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border bg-pink-500 hover:bg-pink-600 text-white rounded-lg sm:w-auto focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Explore Solutions
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg sm:w-auto focus:outline-none bg-pink-500 hover:bg-pink-600 text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>

<Company />

{/* about company */}
<section className="bg-gray-50 dark:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
     
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
             <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-pulse" src={devloopsabtcompany} alt="dashboard feature image"/>
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">About Company</h2>
                <p className="mb-8 font-light  lg:text-xl">Harnessing the power of international insights with tailoring solutions to meet your unique needs.</p>
               
                <p className="mb-8 font-dark lg:text-xl"><span className="text-red-500">DevLoops International</span> is a dynamic and forward-thinking company at the intersection of technology and creativity. Established with a passion for innovation, we are dedicated to delivering bespoke solutions that empower businesses and individuals to thrive in the ever-evolving digital landscape.</p>
            </div>
            {/* <!-- <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./assets/img/devloopsabtcompany.jpeg" alt="dashboard feature image"> --> */}
        </div>
        </div>
        </section>


 <Missionvission />


{/* our services */}

<div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ml-40">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        {/* Dynamic h2 tag */}
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {dynamicContent.title}
        </h2>

        <div className="mb-8 font-light lg:text-xl">
          {/* Dynamic p tag */}
          <p>{dynamicContent.para}</p>
        </div>

        {/* Dynamic list */}
        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
          {dynamicContent.listItems.map((item, index) => (
            <li key={index} className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{item}</span>
            </li>
          ))}
        </ul>

        {/* Dynamic paragraph */}
        <p className="font-dark lg:text-xl">
        {dynamicContent.description}
        </p>
      </div>

      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-pulse"
        src={erp}
        alt="feature image 2"   />
    </div>


{/* our process */}
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center text-2xl px-5 mb-6">
    <h2 className="mb-4  tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Our Process</h2>
    <p className="text-gray-500 sm:text-xl lg:text-2xl mb-7 dark:text-gray-400 text-center">Guiding Your Digital Success with Precision and Expertise</p>
    </div>


        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e86d92" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16m0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16m416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"/>
             </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Requirement Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Thoroughly assess and document project requirements to establish a foundation.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    
                <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#e86d92" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M3.944 11.79a.5.5 0 0 1 .141-.277L14.163 1.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L8.68 16.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z"/>
                <path d="m15.472 8.173l-3.537-3.53l.707-.708l3.536 3.53z"/>
            </g>
            </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Design and Prototyping</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Craft a visually appealing and functional design, incorporating prototypes for user.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e86d92" fill-rule="evenodd" d="M9.424 2.023a.75.75 0 0 1 .556.904L7.48 13.42a.75.75 0 0 1-1.46-.348L8.52 2.58a.75.75 0 0 1 .904-.556ZM11.16 4.22a.75.75 0 0 1 1.06 0l3.25 3.25L16 8l-.53.53l-3.25 3.25a.75.75 0 1 1-1.06-1.06L13.88 8l-2.72-2.72a.75.75 0 0 1 0-1.06M4.84 5.28a.75.75 0 1 0-1.06-1.06L.53 7.47L0 8l.53.53l3.25 3.25a.75.75 0 0 0 1.06-1.06L2.12 8z" clip-rule="evenodd"/>
            </svg>                    
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Coding and Implementation</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Utilize industry best practices in coding, ensuring clean, efficient Solutions.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="28" height="28" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e86d92" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"/>
            </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Testing and Quality Assurance</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Rigorously test the software to identify and rectify bugs and reliable end product.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="28" height="28" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#e86d92" fill-rule="evenodd">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </g>
            </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Deployment and Release</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Safely deploy the software to make the product accessible to users seamlessly.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg width="27" height="27" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e86d92" fill-rule="evenodd" d="M3.5 2h-1v5h1zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1zm3.9-8h-1v2h1zm-1 6h1v6h-1zm-4 3h-1v3h1zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95zm2.1-9h-1v6h1zm-1 10h1v2h-1z" clip-rule="evenodd"/>
                </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Maintenance and  Improvement</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Implement ongoing maintenance and ensuring sustained performance .</p>
            </div>
        </div>
    </div>
  </section>

 <Team />

 <Testimonial />

 

    </>
   
    
  );
};

export default Home;
