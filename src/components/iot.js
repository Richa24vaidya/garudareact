import React, { Component } from 'react';
import  {useState} from 'react';
import iotheron from '../img/iotheronew.jpg';
import Navbar from './navbar';


const Iot=() => {

    const [dynamicContent, setDynamicContent] = useState({
        title: 'IOT Solutions',
        para :'Devloops International pioneers the future of connectivity',
      
    });
    return(
        <>
       
        <section className="relative bg-gradient-to-r from-gray-500 to-blue-400 py-20">
    <div className="absolute inset-0">
        <img src={iotheron} alt="Hero Image" className="w-full h-full object-cover" />
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
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center text-2xl px-5 mb-6">
    <h2 className="mb-4  tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Features built for scale</h2>
    <p className="text-gray-500 sm:text-xl lg:text-2xl mb-7 dark:text-gray-400 text-center">The quickest and easiest theme for every team
</p>
    </div>


        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
        <circle cx="12" cy="13" r="2" stroke="#d25b8b" stroke-width="1.5"/>
        <path fill="#d25b8b" d="M11.25 17.5a.75.75 0 0 0 1.5 0zm0-2.5v2.5h1.5V15z"/>
        <path stroke="#d25b8b" stroke-linecap="round" stroke-width="1.5" d="M22 11.798c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-3"/>
    </g>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Security Measures</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Advanced security protocols to protect data .</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    {/* <!-- <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg> --> */}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#d25b8b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="m9 11l3 3l8-8"/>
        <path d="M20 12a8 8 0 1 1-5.3-7.533"/>
    </g>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Predictive Maintenance</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Proactive upkeep for equipment and systems.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e86d92" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20zM30 4h-7v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L6 16.586L7.414 18L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2z"/>
    <path fill="#e86d92" d="M4 2H2v26a2 2 0 0 0 2 2h8v-2H4Z"/>
</svg>                  
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Integration Capabilities</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Seamlessly connect with existing systems.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 1025 1025" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e86d92" d="m1014.86 967l-47 48q-10 9-24 9t-24-9l-151-152q-60 34-128 34q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181q0 68-34 127l152 152q10 10 10 23.5t-10 23.5m-373.5-518q-79.5 0-136 56t-56.5 135.5t56.5 136t136 56.5t135.5-56.5t56-136t-56-135.5t-135.5-56m63.5-122v-6q0-27 19-45.5t45-18.5h128q27 0 46 18.5t19 45.5v320h-1q0-115-72.5-203.5T704.86 327m-320 122V193q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v128q-77 0-144 34.5t-112 93.5m0 383q45 60 112 94.5t144 34.5h64q0 26-18.5 45t-45.5 19h-576q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5V64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v833h64z"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Data Visualization</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Clear data representation for understanding.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="#d25b8b" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/>
    <path fill="#d25b8b" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Data Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl"> Real-time data insights for informed decision-making.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg width="34" height="34" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24.119" cy="28.818" r="2.72" fill="none" stroke="#d25b8b" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill="none" stroke="#d25b8b" stroke-linecap="round" stroke-linejoin="round" d="M14.34 8.953c2.125-2.759 5.74-4.43 9.625-4.453c3.886-.022 7.527 1.61 9.694 4.344M19.6 12.978c.962-1.25 2.6-2.007 4.36-2.017c1.76-.01 3.408.73 4.39 1.968"/>
    <rect width="12.48" height="25.477" x="17.808" y="18.023" fill="none" stroke="#d25b8b" stroke-linecap="round" stroke-linejoin="round" rx="2.361" ry="2.361"/>
</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Remote Monitoring</h3>
                <p className="text-gray-500 dark:text-gray-400 lg:text-xl">Allowing users to access and manage them from anywhere.</p>
            </div>
        </div>
    </div>
  </section>

{/* abt web development */}

<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Internet Of Things</h2>
    <p className="mb-3 py-4">Utilize Devloops's IoT development services in sensor programming, gateway integration, connection, IoT applications, IoT platform development, and analytics to drive hyperconnectivity in your organization. Use cutting-edge IoT technologies to increase efficiency, engage customers, and improve the strategy by gaining business information more quickly.</p>
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
    {/* <!-- <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center text-2xl px-5 mb-6">
    <h2 className="mb-4  tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Designed for business teams like yours</h2>
    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
</div> --> */}

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="rounded-full bg-red-100 p-2 inline-block">
            <svg className="animate-bounce mx-auto my-2 py-3" width="80" height="80" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="ipTMarketAnalysis0">
            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <path fill="#555" d="M44 11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9h40z"/>
                <path d="m4.112 39.03l12.176-12.3l6.58 6.3L30.91 26l4.48 4.368"/>
                <path d="M44 18v19a3 3 0 0 1-3 3H12m7.112-26h18M11.11 14h2M4 18v9"/>
            </g>
        </mask>
    </defs>
    <path fill="#d25b8b" d="M0 0h48v48H0z" mask="url(#ipTMarketAnalysis0)"/>
</svg>
            </div> 
     <h3 className="mb-4 text-2xl font-semibold py-2">Iot analytics</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">It involves collecting, processing, and analyzing data from sensors, devices, and other IoT components to derive valuable information. Advanced analytics techniques, including machine learning and artificial intelligence , are often employed to discover patterns, trends, and anomalies within the data.</p>
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
            <svg  className="animate-bounce mx-auto my-2 py-3" width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#d25b8b" d="M5 13v9H3v-9Zm18 0v2h-2v7h-2v-7h-2v-2Zm-11-2a7.537 7.537 0 0 1 3.96 1.149l1.447-1.45A9.522 9.522 0 0 0 12 9a9.363 9.363 0 0 0-5.333 1.68l1.449 1.453A7.36 7.36 0 0 1 12 11"/>
    <path fill="#d25b8b" d="M12 7a11.494 11.494 0 0 1 6.834 2.27l1.427-1.43A13.48 13.48 0 0 0 12 5a13.333 13.333 0 0 0-8.186 2.822l1.426 1.43A11.343 11.343 0 0 1 12 7"/>
    <path fill="#d25b8b" d="M12 3a15.471 15.471 0 0 1 9.687 3.41l1.427-1.429A17.43 17.43 0 0 0 .96 4.964l1.427 1.429A15.328 15.328 0 0 1 12 3m0 10a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 13m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 20"/>
</svg>
            </div> 
                <h3 className="mb-4 text-2xl font-semibold py-2">Iot Connectivity</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">As IoT involve a diverse range of devices with varying communication protocols, standards, and requirements, effective connectivity solutions are essential. Technologies such as MQTT, CoAP, and HTTP are commonly used to establish communication between IoT devices and platforms.</p>
              
            </div>
          
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="rounded-full bg-red-100   p-2 inline-block">
            <svg  className="animate-bounce mx-auto my-2 py-3" width="81" height="81" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#d25b8b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <rect width="6" height="6" x="16" y="16" rx="1"/>
        <rect width="6" height="6" x="2" y="16" rx="1"/>
        <rect width="6" height="6" x="9" y="2" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"/>
    </g>
</svg>
            </div> 
                <h3 className="mb-4 text-2xl font-semibold py-2">Iot Security</h3>
                <p className="font-dark text-gray-500 sm:text-lg dark:text-gray-400">As IoT devices collect and transmit sensitive data, ensuring the confidentiality, integrity, and availability of this information is paramount. Security measures include robust authentication mechanisms , encryption of data in transit and at rest, and secure device management practices.</p>
                {/* <!-- <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$499</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div> -->
                <!-- List --> */}
               
              {/* <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
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

export default Iot;