import React from 'react';

export function About() {
    return (
        <>
            <section id="about"
                className="flex flex-col-reverse sm:flex-row md:flex-row bg-zinc-200 md:px-12 md:h-screen pt-32 px-6 w-full xl:md-32 justify-evenly items-center">
                <div className="flex rounded-full m-8 shadow-2xl">
                    <img src="/img/olafur.JPG"
                        className="md:h-96 h-64 md:mt-0 rounded-full" alt="author" />

                </div>
                <div className="flex max-w-[600px]">
                    <div>
                        <h1 className="text-5xl font-bold text-primary-blue text-center">About me</h1>
                        <p className="text-lg text-slate-900 mt-12 text-pretty text-justify">
                        As a seasoned Software Developer with over a decade of experience, I specialize in building robust 
                        software solutions across diverse industries, from Air Traffic Management to ticketing systems and 
                        beyond.
                        </p>
                        <p className="text-lg text-slate-900 mt-6 text-pretty text-justify">
                        I currently work at Tern Systems as a Senior Software Engineer where I contribute to mission-critical
                         systems supporting Iceland's expansive airspace management. 
                        </p>
                        <p className="text-lg text-slate-900 mt-6 text-pretty text-justify">
                            I have deep expertise in C++, Python, C# .NET, JavaScript and SQL and have used these languages to build
                            a wide array of applications, from websites, mobile apps to desktop systems and beyond.
                        </p>


                    </div>
                </div>
            </section>
            <section id="projects" className="h-screen w-full bg-primary-yellow  py-16 md:py-20">

                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Check out some of my recent projects
                </h2>
                <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    Here's my most recent personal projects.
                </h3>

                <div className="mx-auto grid w-full h-full 
                grid-cols-1 gap-8 mt-12 p-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2 overflow-hidden">
                    <div
                        className="mx-auto transform h-[200px] md:h-[480px]  
                    transition-all hover:scale-105 md:mx-0  rounded-lg shadow bg-gray-800 border-gray-700">
                        <a href="https://www.verkthekking.is" target="_blank" rel="noopener noreferrer" className="h-full">
                            <img className="w-fullrounded-t-lg shadow" src="/img/pic1.png" alt="Verkþekking ehf" />
                        </a>
                        <div className="p-5 absolute w-full h-[200px] top-[480px] bg-primary-blue rounded-lg">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Verkþekking
                            </h5>

                            <p className="mb-3 font-normal text-gray-400">Responsive website done in HTML and
                                Tailwind CSS.</p>
                            <a href="https://www.verkthekking.is" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none
                                bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Open website
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mx-auto transform h-[200px] md:h-[480px]  
                    transition-all hover:scale-105 md:mx-0  rounded-lg shadow bg-gray-800 border-gray-700">
                        <a href="https://aclanthology.org/2024.sigul-1.11.pdf" target="_blank" rel="noopener noreferrer" className="h-full">
                            <img className="w-fullrounded-t-lg shadow" src="/img/pic3.png" alt="Verkþekking ehf" />
                        </a>
                        <div className="p-5 absolute w-full h-[200px] top-[480px] bg-primary-blue rounded-lg">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Evaluating Icelandic Sentiment Analysis Models
                            </h5>

                            <p className="mb-3 font-normal text-gray-400">Peer-reviewed paper published in 2024 to the SIGUL conference. I held a presentation at
                            Torino, Italy.</p>
                            <a href="https://aclanthology.org/2024.sigul-1.11.pdf" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none
                                bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Open website
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}