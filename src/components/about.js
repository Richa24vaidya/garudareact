import React, { Component, useState } from 'react';
import Team from './team';
import Company from './company';
import Missionvission from './missionvission';
import Testimonial from './testimonial';
import about from '../img/about.png';
import erp from '../img/erp.png';


const About = () => {

  const [dynamicContent, setDynamicContent] = useState({
    title: 'What We offer',
    para: 'Explore the distinctive features that drive the functionality',
    listItems: [
      'Product Development',
      'Web application',
      'Internet Of Things',
    ],
    description: 'Building dynamic and responsive web experiences that not only meet but exceed modern standards.Empowering the future with interconnected devices and smart solutions.',
  });
  return (
    <>
      {/* // section  hero */}
      <section className="bg-white py-8 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full max-w-full order-2 md:order-none dark:hidden animate-pulse"
            src={about}
            alt="dashboard image"
          />
          {/* <img className="w-full hidden dark:block  " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}

          <div className="mt-4  md:mt-0 order-1 md:order-none">
            <h2 className=" mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="/" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>

      <Company />

      {/* our history, mission who we are */}

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">


          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card --> */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="rounded-lg bg-red-100 p-2 inline-block">
                <svg className=" mx-auto my-2" width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ca4e8a" d="M4.5 10H10a3 3 0 0 0 1.07-5.8a4 4 0 0 0-7.48 1A2.5 2.5 0 0 0 4.5 10m0-3a1 1 0 0 0 1-1a2 2 0 0 1 3.89-.64a1 1 0 0 0 .78.66A1 1 0 0 1 11 7a1 1 0 0 1-1 1H4.5a.5.5 0 0 1 0-1M21 16h-1V9a3 3 0 0 0-3-3h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7H6v-3a1 1 0 0 0-2 0v3H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1m-1 3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold py-2">Our History</h3>
              <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">We create <span className="text-red-500"> pixel perfect web & mobile app designs </span>that are visually appealing and foster your identity.</p>

            </div>

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="rounded-lg bg-red-100 p-2 inline-block">
                <svg className=" mx-auto my-2 py-3" width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ca4e8a" d="M49.947 0C22.354.03 0 22.406 0 50a50 50 0 0 0 20.404 40.21c-.265-2.031-.213-4.128.117-6.202a45.22 45.22 0 0 1-8.511-9.877h12.445c1.182-1.845 2.4-3.67 4.525-5c-1.245-5.1-2.006-10.716-2.146-16.631h1.346a18.653 18.653 0 0 1 1.93-5h-3.243c.212-5.935 1.043-11.554 2.363-16.63H47.5v8.888a13.75 13.75 0 0 1 5 1.804V30.87h19.195c.26.997.495 2.02.715 3.057a19.769 19.769 0 0 1 5.084-.117a76.416 76.416 0 0 0-.639-2.94h13.89a44.747 44.747 0 0 1 3.965 14.028c.58 5.049.591 10.975-1.246 16.771a45.007 45.007 0 0 1-2.286 6.478c1.128 1.187 2.494 2.309 3.867 3.454A50 50 0 0 0 100 50c0-27.614-22.386-50-50-50ZM52.5 5.682c5.268.896 10.302 5.236 14.268 12.437c1.278 2.321 2.42 4.927 3.408 7.75H52.5Zm-5 .197v19.99H30.75c.988-2.823 2.13-5.429 3.408-7.75C37.89 11.341 42.571 7.102 47.5 5.88M35.98 7.232c-2.324 2.352-4.41 5.22-6.203 8.475c-1.68 3.05-3.125 6.467-4.312 10.162H12.01c5.535-8.706 13.975-15.37 23.97-18.637m29.41.463c9.398 3.413 17.32 9.868 22.6 18.174H75.455c-1.184-3.695-2.627-7.112-4.307-10.162c-1.676-3.045-3.613-5.749-5.757-8.012M9.257 30.87h14.808c-1.245 5.162-2.008 10.76-2.203 16.631H5.072a44.79 44.79 0 0 1 4.184-16.63M5.072 52.5h16.762c.129 5.856.82 11.454 1.994 16.63H9.256A44.79 44.79 0 0 1 5.072 52.5" color="#ca4e8a" />
                  <path fill="#ca4e8a" d="M76 37.769c-8.285 0-15 6.716-15 15c0 8.284 6.715 15 15 15c8.283 0 15-6.716 15-15c0-8.284-6.717-15-15-15m0 32.223c-16.57 0-24 7.431-24 24v2c.075 3.94 1.817 4.056 5.5 4h37c4.695-.004 5.532.005 5.5-4v-2c0-16.569-7.432-24-24-24M44 43.39c-6.787 0-12.291 5.504-12.291 12.292c0 6.787 5.504 12.289 12.291 12.289c6.787 0 12.29-5.502 12.29-12.29c0-6.787-5.503-12.29-12.29-12.29m0 26.401c-13.575 0-19.664 6.09-19.664 19.664v1.639c.062 3.228 1.489 3.323 4.506 3.277h19.123c-.488-8.088 1.901-16.678 7.851-22.139c-3.012-1.646-6.925-2.441-11.816-2.441" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold py-2">our Mission</h3>
              <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">We provide <span className="text-red-500">Digital solutions </span>that create competitive shopping & B2B trade experiences.</p>
              {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$99</span>
                    <span className="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
                </div> -->
                <!-- List --> */}

              {/* <!-- <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
             */}
            </div>
            {/* <!-- Pricing Card --> */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="rounded-lg bg-red-100   p-2 inline-block">
                <svg className=" mx-auto my-2" width="64" height="64" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ca4e8a" d="M698.598 922.244h-199.6V722.646h199.6zm252.506 0H751.503V722.646h199.601zm-505.012 0H246.493V722.646h199.599zm505.012-631.262v367.936h-704.61V290.982zm101-105.812H147.896v829.66h904.209zM0 1161.521V38.478h1200v1123.045z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold py-2">Who we are</h3>
              <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">We offer<span className="text-red-500"> robust & scalable</span>  web development services across all verticals an Agile way .</p>
              {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$499</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div> --> */}


              {/* <!-- <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
            */}
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}

      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ml-36">
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
          alt="feature image 2" />
      </div>

      {/* our missionvision */}

      <Missionvission />

      <Testimonial />

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl  py-2 mx-auto lg:py-14 lg:px-6">

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

              <h6 className="mb-4 text-xl text-red-500 py-2">— Delivered Goods</h6>
              <div className="flex justify-center items-baseline ">
                <span className="mr-2 text-5xl font-extrabold px-5">420+</span>
                {/* <!-- <span className="text-gray-500 dark:text-gray-400">/month</span> --> */}
              </div>
              <p className="font-dark"> Ensuring a seamless and successful software or IT consulting project launch.</p>

              {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div> -->
                <!-- List -->
              
                <!-- <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
            */}
            </div>

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

              <h6 className="mb-4 text-xl text-red-500 py-2">— It Consulting</h6>
              <div className="flex justify-center items-baseline ">
                <span className="mr-2 text-5xl font-extrabold px-5">245+</span>
                {/* <!-- <span className="text-gray-500 dark:text-gray-400">/month</span> --> */}
              </div>
              <p className="font-dark"> Ensuring a seamless and successful software or IT consulting project launch.</p>


            </div>

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

              <h6 className="mb-4 text-xl text-red-500 py-2">Fully Launched</h6>
              <div className="flex justify-center items-baseline ">
                <span className="mr-2 text-5xl font-extrabold px-5">400+</span>
                {/* <!-- <span className="text-gray-500 dark:text-gray-400">/month</span> --> */}
              </div>
              <p className="font-dark"> Ensuring a seamless and successful software or IT consulting project launch.</p>

            </div>
          </div>
        </div>
      </section>


      <Team />

      <div className="text-center mb-5">
        <button className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact">
          Show contact form
        </button>
      </div>

    </>
  )
}

export default About;