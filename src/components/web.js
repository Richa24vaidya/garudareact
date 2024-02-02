import React, { Component } from 'react';
import  {useState} from 'react';
import webheron from '../img/webheronew.jpg';
import Navbar from './navbar';


const Web=() => {

    const [dynamicContent, setDynamicContent] = useState({
        title: 'Web Development',
        para: 'Revolutionize Your Online Presence with Cutting-Edge Solutions',
      
    });
    return(
        <>
       
        <section className="relative bg-gradient-to-r from-gray-500 to-blue-400 py-20">
    <div className="absolute inset-0">
        <img src={webheron} alt="Hero Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-400 opacity-30"></div>
    </div>
       
      <div className="relative  z-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl text-left ml-48">  {dynamicContent.title}</h1>
        <p className="mb-8  font-normal text-white-500 lg:text-5xl sm:px-16 xl:px-48 text-white">  {dynamicContent.para}</p>
       
    </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            
    </div>
</section>

{/* features */}

<section className="bg-white dark:bg-gray-900">
    <div className="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center text-2xl px-5 mb-6">
    <h2 className="mb-4  tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Features built for scale</h2>
    <p className="text-gray-500 sm:text-xl lg:text-2xl mb-7 dark:text-gray-400 text-center">The quickest and easiest theme for every team
</p>
    </div>


        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e86d92" d="M14 18.315A7.037 7.037 0 0 1 11.263 16H3V4h18v2.264a7.046 7.046 0 0 1 2 2.15V4a2.006 2.006 0 0 0-2-2H3a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2H8v2h8v-2h-2Z"/>
    <path fill="#e86d92" d="M17 6a6 6 0 1 0 6 6a5.998 5.998 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"/>
    <circle cx="17" cy="12" r="1" fill="#e86d92"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Analytics and Monitoring</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl"> Monitoring tools can identify and address issues promptly.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    {/* <!-- <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg> --> */}
                <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#e86d92" stroke-linecap="round" stroke-linejoin="round" d="m11.15 11.413l5.221-2.661m16.925 18.529l4.894-2.494m-16.746-8.128L11.15 11.413m8.539 2.623l-3.318-1.691m3.318-2.658l-3.318-1.691m16.925 2.623L26.548 7.18m1.601 34.189l-3.445-1.756m3.445-4.17l-3.445-1.756m13.555-3.412l-3.445-1.756m3.376-3.732l-1.47-.749m0 0l1.658-.845m0 0l-5.082-2.59M21.444 43.5l-10.162-5.179M21.444 43.5l5.147-2.623m1.558.492l10.229-5.212m-10.229-.714l10.229-5.213M21.444 16.659V43.5m11.852-32.881v16.662m5.082-4.088v12.964m-10.229-.714v5.926m-3.445-7.682v5.926m10.11-11.094l-10.11 5.168M16.371 7.996v4.349m3.318-2.658v4.349m1.755 2.623l11.852-6.04m-13.607 3.417l6.859-3.496m-6.859-.853l6.859-3.496M16.371 7.996L23.229 4.5m3.319 1.691L23.229 4.5m3.319 1.691v4.349M12.941 25.82l-3.319-1.691m3.319-2.658L9.622 19.78m0 0v4.349m3.319-2.658v4.349m0 0l5.089-2.649m-3.429 5.883l-3.319-1.691m0-2.388v2.388m3.319-2.407v4.098m0 0l3.405-1.773m-5.065-5.81l5.089-2.649m-8.408.958l5.089-2.65m3.319 1.692l-3.319-1.692m3.319 1.692v4.349m0 0v4.11m-6.88-15.868v7.598m.132 8.352v10.891m14.404-19.63v1.892"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">User Authentication</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Implementing secure login and authorization systems.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e86d92" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20zM30 4h-7v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L6 16.586L7.414 18L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2z"/>
    <path fill="#e86d92" d="M4 2H2v26a2 2 0 0 0 2 2h8v-2H4Z"/>
</svg>                  
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Security Measures</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Implementing robust security protocols to protect against threats and vulnerabilities.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 1025 1025" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e86d92" d="m1014.86 967l-47 48q-10 9-24 9t-24-9l-151-152q-60 34-128 34q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181q0 68-34 127l152 152q10 10 10 23.5t-10 23.5m-373.5-518q-79.5 0-136 56t-56.5 135.5t56.5 136t136 56.5t135.5-56.5t56-136t-56-135.5t-135.5-56m63.5-122v-6q0-27 19-45.5t45-18.5h128q27 0 46 18.5t19 45.5v320h-1q0-115-72.5-203.5T704.86 327m-320 122V193q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v128q-77 0-144 34.5t-112 93.5m0 383q45 60 112 94.5t144 34.5h64q0 26-18.5 45t-45.5 19h-576q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5V64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v833h64z"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Real-Time Updates</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Web apps that involve data analytics can benefit from real-time updates.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#e86d92" stroke-linecap="round" stroke-linejoin="round" d="m1.24 6.54l11.5-5.23M10.59.5l2.15.81l-.8 2.15m1.31 10.05h-2.5h0v-7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v7h0Zm-5 0h-2.5h0v-5.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v5.5h0Zm-5 0H.75h0v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v4h0Z"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Offline Functionality</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Users can still access certain features and content even when they are offline.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg width="27" height="27" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e86d92" fill-rule="evenodd" d="M3.5 2h-1v5h1zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1zm3.9-8h-1v2h1zm-1 6h1v6h-1zm-4 3h-1v3h1zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95zm2.1-9h-1v6h1zm-1 10h1v2h-1z" clip-rule="evenodd"/>
                </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Security Measures</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Incorporate features such as encryption &amp; authentication.</p>
            </div>
        </div>
    </div>
  </section>

{/* abt web development */}

<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Web Development</h2>
    <p className="mb-3 py-4">Web development can also play an important role in providing an interface for customers and control points for businesses. Our dedicated web application developers will develop and deliver web development that help improve operational efficiency, accelerate decision making and gain competitive advantage.</p>
    <a href="/contact">
    <button className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:shadow-outline-blue active:bg-pink-800 transition duration-150 ease-in-out">Contact Us</button>
</a>
</div>


        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>


{/* what we offer */}
<section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
    

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
           
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="rounded-full bg-red-100 p-2 inline-block">
            <svg  className="animate-bounce mx-auto my-2 py-3" width="65" height="65" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ca4e8a" d="M15.535 2.808a2.003 2.003 0 0 0-2.828 0l-9.899 9.899a2.001 2.001 0 0 0 0 2.828l5.657 5.657c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l9.899-9.899c.78-.779.78-2.049 0-2.828zM8.707 16.707a.999.999 0 1 1-1.414-1.414a.999.999 0 1 1 1.414 1.414m7 5l-1.414-1.414l6-6l1.414 1.415zM8.293 2.293l1.414 1.414l-6 6l-1.414-1.415z"/>
</svg>
            </div> 
     <h3 className="mb-4 text-2xl font-semibold py-2">E-Commerce</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">In an e-commerce website, businesses create an online presence to showcase their products or services, enabling customers to browse, select, and purchase items with ease. Critical components of an e-commerce site include a <span className="text-primary"> user-friendly interface, secure payment gateways</span>, and efficient inventory management.</p>
                {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div> -->
                <!-- List -->
              
                <!-- <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
             */}
            </div>
            
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="rounded-full bg-red-100 p-2 inline-block">
            <svg className="animate-bounce mx-auto my-2 py-3" width="70" height="70" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ca4e8a">
        <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1zm1 3v10a1 1 0 0 1-1 1h-2V4zm-4 0v11H2a1 1 0 0 1-1-1V4z"/>
    </g>
</svg>
            </div> 
                <h3 className="mb-4 text-2xl font-semibold py-2">Multipage Website</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">A multipage website consists of multiple interconnected web pages, providing a structured and organized platform for content delivery. Each page serves a specific purpose, such as showcasing different  <span className="text-primary">products, services, or information</span>. Important elements of a multipage website include a clear navigation structure.</p>
                {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$99</span>
                    <span className="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
                </div> --> */}
                
            </div>
         
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="rounded-full bg-red-100   p-2 inline-block">
            <svg  className="animate-bounce mx-auto my-2" width="64" height="64" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ca4e8a" d="M698.598 922.244h-199.6V722.646h199.6zm252.506 0H751.503V722.646h199.601zm-505.012 0H246.493V722.646h199.599zm505.012-631.262v367.936h-704.61V290.982zm101-105.812H147.896v829.66h904.209zM0 1161.521V38.478h1200v1123.045z"/>
</svg>
            </div> 
                <h3 className="mb-4 text-2xl font-semibold py-2">Dynamic Website</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">A dynamic website utilizes server-side technologies to generate content on the fly, dynamic sites can dynamically alter content based on  <span className="text-primary">user interactions, database queries, or external data sources</span>. Key components of a dynamic website include a robust content management system (CMS), database integration, PHP or JavaScript.</p>
                {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$499</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div> -->
                <!-- List -->
               
                <!-- <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
             */}
            </div>
        </div>
    </div>
  </section>
{/* <!-- End block --> */}


  {/* explore startup */}

  <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center text-2xl px-5 mb-6">
    <h2 className="mb-4  tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Explore Startups</h2>
    <p className="text-gray-500 sm:text-xl lg:text-2xl mb-7 dark:text-gray-400 text-center">Find a job you love. Set your career interests.</p>
    </div>
<div className="space-y-1 lg:grid lg:grid-cols-4  mb-20   sm:gap-6 xl:gap-5 lg:space-y-0">
           
            
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">IT <br /> Coordinator</h3>
  
                
            </div>
           
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Software <br />  Development</h3>
  
            </div>
           
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">UI/UX <br /> Designer</h3>
  
                
            </div>
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Product <br /> Designer</h3>
  
            </div>
        </div>


</>

    )
}

export default Web;