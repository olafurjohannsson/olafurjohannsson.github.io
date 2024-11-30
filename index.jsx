import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(

    <div>
        <header className="bg-primary-blue flex items-center justify-between lg:flex-row px-8 sm:px-32">
            <div>
                <a href="#" className="z-50">
                    <img className="rounded-lg" alt="Logo" fetchpriority="high" width="128" height="128" decoding="async"
                        src="/img/logo1.png" />
                </a>
            </div>
            <nav className="text-white  text-lg tracking-widest text-normal flex 
                    gap-4 lg:gap-5 xl:gap-12 relative items-center">

                <div className="block xl:hidden z-50">
                    <input className="hidden menu-btn" type="checkbox" id="menu-btn" />
                    <label className="border-zinc-50 relative select-none cursor-pointer flex justify-center items-center
                    rounded-l w-12 h-12 p-2.5 pb-[11px] border " htmlFor="menu-btn">
                        <span className="bg-white h-[1.75px] relative transition-all w-6
                            after:bg-white after:block after:h-full after:absolute after:transition-all
                            after:w-full after:top-[8px] bottom-[2.5px]"></span>
                    </label>
                    <ul id="menu-ul" className="absolute bg-white z-50 top-16 right-0 w-64 text-base
            shadow-2xl xl:shadow-none rounded-lg transition-all ease-linear
            xl:static xl:flex xl:rounded-none xl:w-auto xl:gap-14 text-center items-center h-0">
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hover:border-primary-red hover:scale-110
                                        hidden hover:border-b" href="#home">Home</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#about">About</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative  hover:text-theme font-semibold bg-transparent
                                        hidden border-b" href="#experience">Experience</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative  hover:text-theme font-semibold bg-transparent
                                        hidden border-b" href="#services">Projects</a>
                        </li>
                    </ul>
                </div>

                <ul id="menu-ul" className="absolute bg-primary-blue top-12 right-0 w-64 text-base
                shadow-2xl xl:shadow-none rounded-lg transition-all ease-linear z-50
                xl:static xl:flex xl:rounded-none xl:w-auto xl:gap-14 
                items-center max-h-0">
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hover:border-primary-red hover:scale-110
                                        hidden hover:border-b" href="#home">Home</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#about">About</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative  hover:text-theme font-semibold bg-transparent
                                        hidden border-b" href="#experience">Experience</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative  hover:text-theme font-semibold bg-transparent
                                        hidden border-b" href="#services">Projects</a>
                    </li>
                </ul>
            </nav>

        </header>
        <main>
            <section id="home"
                className="bg-primary-blue flex relative h-[calc(75vh)] flex-col items-center justify-center text-center lg:flex-row max-w-[2000px] mx-auto">
                <div className="flex flex-col items-center lg:mb-0 lg:w-2/3 md:w-2/3 z-50">
                    <h1 className="text-3xl text-zinc-200  lg:text-5xl">
                        Hi! My name is <span className="text-primary-red hover:scale-110">Ólafur Aron</span> and I am a software
                        developer based
                        in Reykjavík, Iceland.
                    </h1>

                </div>
                <div className="flex md:p-16 p-10 z-50">
                    <button name="learn more" className="rounded-xl text-center transition focus-visible:ring-2 ring-offset-2 hover:bg-primary-red hover:text-primary-blue
                    ring-orange px-6 py-3 border-primary-red bg-primary-blue text-white border-2 hover:scale-110 flex">
                        <a href="https://github.com/olafurjohannsson/olafurjohannsson/blob/main/cv.md">Open CV</a>
                    </button>
                </div>
                <div className="absolute opacity-50  bg-opacity-50 inset-0s">
                    <canvas id="canvas"></canvas>
                </div>
            </section>
            <div className="bg-primary-blue absolute left-0 w-screen z-100 -mt-[1px] -mb-4 h-12 overflow-hidden">
                {/* <svg width="100%" height="100%" viewBox="0 0 3431 347" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    preserveAspectRatio="none"
                    style="fill-rule: evenodd; clip-rule: evenodd;stroke-linejoin: round;stroke-miterlimit: 1.41421;">
                    <path
                        d="M0,347c455.317,-299.761 942.752,-432.753 1462.31,-259.881c862.781,236.634 1505.13,306.177 1968.69,-87.119l0,347l-3431,0Z"
                        style="fill: rgb(228,228,231); fill-rule: nonzero"></path>
                </svg> */}
            </div>
            <section id="about"
                className="flex flex-col-reverse sm:flex-row md:flex-row bg-zinc-200 md:px-12 md:h-screen pt-32 px-6 w-full xl:md-32 justify-evenly items-center">
                <div className="flex rounded-full border-4 border-zinc-200 shadow-xl ml-8">
                    <img src="/img/olafur.JPG"
                        className="md:h-96 h-64 mt-8 md:mt-0 rounded-full" alt="author" />

                        </div>
                <div className="flex max-w-[600px]">
                    <div>
                        <h1 className="text-5xl font-bold text-primary-blue text-center">About me</h1>
                        <p className="text-lg text-slate-900 mt-16 text-pretty text-justify">
                            As a seasoned Software Engineer with over a decade of experience, I specialize in building
                            robust
                            software solutions across diverse industries, from Air Traffic Management to ticketing systems
                            and
                            beyond. I currently serve at Tern Systems, where I contribute to mission-critical systems
                            supporting
                            Iceland's expansive airspace management. My work includes leading the development of
                            cutting-edge
                            tools like Polaris, a next-generation aircraft surveillance display, and Air Archive, a
                            web-based
                            platform for analyzing surveillance data.
                        </p>
                        <p className="text-lg text-slate-900 mt-8 text-pretty text-justify">
                            While I have deep expertise in C++ and systems programming, I am also highly proficient in
                            modern
                            web
                            technologies, including TypeScript, Next.js, Node.js, React, Tailwind CSS, and PostgreSQL. This
                            allows
                            me to deliver full-stack solutions that span from system architecture to intuitive, responsive
                            web
                            applications. My work is grounded in a commitment to quality, efficiency, and leveraging the
                            best
                            technology stack for the job at hand.
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
                        className="mx-auto transform h-[200px] md:h-[480px] transition-all hover:scale-105 md:mx-0 border rounded-lg shadow 
                    bg-gray-800 border-gray-700">
                        <div className="h-full overflow-hidden">
                            <a href="https://aclanthology.org/2024.sigul-1.11.pdf" target="_blank" rel="noopener noreferrer">
                                <img className="w-fullrounded-t-lg shadow" src="/img/pic3.png" alt="" />
                            </a>
                            <div className="p-5 absolute h-[200px] top-[480px] bg-primary-blue rounded-lg">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                                        Evaluating Icelandic Sentiment Analysis Models
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 text-gray-400">
                                    Peer-reviewed paper published in 2024 to the SIGUL conference. I held a presentation at
                                    Torino, Italy.
                                </p>
                                <a href="https://aclanthology.org/2024.sigul-1.11.pdf" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none
                                bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                    Read paper
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <section id="experience"
                className="h-screen flex bg-zinc-200 justify-center items-center relative z-30 xl:w-screen xl:left-[calc(-50vw+50%)] xl:py-20 ">
                <div
                    className="hidden absolute -z-10 bg-theme  bg-primary-blue -translate-y-1/2 top-2/4 xl:flex shadow-2xl
        items-center flex-col justify-center  h-[calc(100vw-43%)] 8xl:w-[calc(((100vw-1504px)/2)+160px)] left-[0%] rounded-r-xl 4xl:items-end 4xl:pr-14">
                    <h2
                        className="uppercase text-5xl text-light flex items-center tracking-wide xl:mb-0 4xl:text-6xl text-zinc-200 -rotate-90">
                        Experience</h2>
                </div>
                <div className="flex md:ml-64 w-full h-full">
                    <div className="flex">
                        <section className="flex md:gap-20 items-center">
                            <div className="mt-10 md:mt-0 flex w-full h-full">
                                <div className="flex mt-12  flex-col m-16">
                                    <div className="relative">
                                        <span
                                            className="left-[37.1%] absolute inset-y-0 ml-10 hidden w-0.5 bg-primary-red md:block"></span>

                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/tern.png" className="h-auto w-32 opact" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-primary-blue"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-primary-red md:block"></span>

                                                    <div className="mt-1 flex">
                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span
                                                                className="block text-slate-900 text-xl font-bold  ">Senior Software
                                                                Engineer</span>
                                                            <span
                                                                className="block  text-slate-900 text-l">Tern Systems</span>
                                                            <span className="block font-body font-bold text-gray-600 text-sm">
                                                                <i className="bx bxs-right-arrow hidden text-gray-600 md:block"></i>
                                                                Sep 2024 -
                                                                Current</span>

                                                            <div className="pt-2">
                                                                <span className="block text-sm text-slate-900 ">Lorem ipsum
                                                                    dolor
                                                                    sit amet, consectetur adipiscing elit.
                                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt.
                                                                    Nam ac
                                                                    venenatis enim.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/tern.png" className="h-auto w-32" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2  bg-primary-red md:block"></span>
                                                    <div className="mt-1 flex">
                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span className="block font-body font-bold text-slate-900">
                                                                <i
                                                                    className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                                                Sept 2016 - September 2024</span>
                                                            <span
                                                                className="block pt-2 font-header text-xl font-bold uppercase text-primary text-slate-900">Software
                                                                Engineer</span>
                                                            <div className="pt-2">
                                                                <span className="block font-body text-slate-900">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit.
                                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt.
                                                                    Nam ac
                                                                    venenatis enim.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/leidir.png" className="h-auto w-32" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2  bg-primary-red md:block"></span>

                                                    <div className="mt-1 flex">

                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span className="block font-body font-bold text-slate-900">
                                                                <i
                                                                    className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                                                2014 - 2016</span>
                                                            <span
                                                                className="block pt-2 font-header text-xl font-bold uppercase text-primary text-slate-900">Freelance Software Developer</span>
                                                            <div className="pt-2">
                                                                <span className="block font-body text-slate-900">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit.
                                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt.
                                                                    Nam ac
                                                                    venenatis enim.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/billetlugen_as_logo.jpeg" className="ml-4 h-auto w-16" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2  bg-primary-red md:block"></span>

                                                    <div className="mt-1 flex">

                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span className="block font-body font-bold text-slate-900">
                                                                <i
                                                                    className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                                                2013 - 2016</span>
                                                            <span
                                                                className="block pt-2 font-header text-xl font-bold uppercase text-primary text-slate-900">Software Developer</span>
                                                            <div className="pt-2">
                                                                <span className="block text-sm text-slate-900">

                                                                    Developing and maintaining ticket management and print systems for Scandinavian brands billetlugen.dk, billetportalen.no and biljettforum.se.

                                                                    The ticketing platforms were owned by Venuepoint, which is a Nordic ticketing provider based in Copenhagen, with local offices in Gothenburg, Stockholm and Oslo. Venuepoint is owned by Egmont / Nordisk Film.



                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/1631331213010.jpeg" className="h-auto w-16" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2  bg-primary-red md:block"></span>

                                                    <div className="mt-1 flex">

                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span className="block font-body font-bold text-slate-900">
                                                                <i
                                                                    className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                                                2013</span>
                                                            <span
                                                                className="block pt-2 font-header text-xl font-bold uppercase text-primary text-slate-900">
                                                                Teaching Assistant</span>
                                                            <div className="pt-2">
                                                                <span className="block font-body text-slate-900">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit.
                                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt.
                                                                    Nam ac
                                                                    venenatis enim.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                                            <div className="md:w-2/5">
                                                <div className="flex justify-center md:justify-start">
                                                    <span className="shrink-0">
                                                        <img src="/thekking_logo.jpeg" className="h-auto w-16" alt="company logo">
                                                    </span>
                                                    <div className="relative ml-3 hidden w-full md:block">
                                                        <span
                                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5">
                                                <div className="relative flex md:pl-18">
                                                    <span
                                                        className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2  bg-primary-red md:block"></span>

                                                    <div className="mt-1 flex">

                                                        <div className="md:-mt-1 md:pl-8">
                                                            <span className="block font-body font-bold text-slate-900">
                                                                <i
                                                                    className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                                                2011 - 2013</span>
                                                            <span
                                                                className="block pt-2 font-header text-xl font-bold uppercase text-primary text-slate-900">
                                                                IT Specialist / Software Developer</span>
                                                            <div className="pt-2">
                                                                <span className="block font-body text-slate-900">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit.
                                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt.
                                                                    Nam ac
                                                                    venenatis enim.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section> */}
        </main>
        <footer className="bg-dark p-10 w-screen left-[calc(-50vw+50%)] relative md:p12 z-30">
            <div
                className="justify-between gap-10 sm:gap-12 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-16 xl:flex max-w-8xl mx-auto lg:px-16">
                <div className="col-span-2 sm:col-span-1 border-t border-b hidden text-white border-t-white border-b-white py-8 sm:py-0 sm:border-none sm:block">
                    <h2 className="text-xl mb-2 text-light">Services</h2>
                    <ul className="grid grid-cols-2 gap-x-7 items-center sm:block">
                        <li className="py-2"><span className="lg:text-base">General Programming</span></li>
                        <li className="py-2"><span className="lg:text-base">Web Design and Development</span></li>
                        <li className="py-2"><span className="lg:text-base">App Development</span></li>
                        <li className="py-2"><span className="lg:text-base">Frontend and Backend Engineering</span></li>
                    </ul>
                </div>
                <div className="px-8">
                    <h2 className="text-xl mb-2">Socials</h2>
                    <ul>
                        <li className="py-2 hover:text-primary-red">
                            <a href="mailto:olafurjohannss@gmail.com" rel="noopener noreferrer" target="_blank"
                                className="lg:text-base">
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-5 flex items-center justify-start"><svg aria-hidden="true"
                                        focusable="false" data-prefix="fas" data-icon="envelope"
                                        className="svg-inline--fa fa-envelope transition-all ease-linear duration-300"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">
                                        </path>
                                    </svg>
                                    </div>
                                    <span className="lg:text-base transition-all hover:text-theme">Email</span>
                                </div>
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://www.linkedin.com/in/%C3%B3lafur-aron-j%C3%B3hannsson-30382340/"
                                rel="noopener noreferrer" target="_blank" className="hover:text-primary-red lg:text-base">
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-5 flex items-center justify-start"><svg aria-hidden="true"
                                        focusable="false" data-prefix="fab" data-icon="linkedin-in"
                                        className="svg-inline--fa fa-linkedin-in transition-all" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg></div><span
                                        className="lg:text-base transition-all hover:text-primary-red">LinkedIn</span>
                                </div>
                            </a>
                        </li>
                        <li className="py-2 false"><a href="https://github.com/olafurjohannsson" rel="noopener noreferrer"
                            target="_blank" className="lg:text-base hover:text-primary-red">
                            <div className="flex items-center gap-1">
                                <div className="w-6 h-5 flex items-center justify-start">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
                                        className="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512">
                                        <path fill="currentColor"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="lg:text-base transition-all">GitHub</span>
                            </div>
                        </a></li>
                    </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                    <h2 className="text-xl mb-2 text-light">Contact for freelance work</h2>
                </div>
            </div>
        </footer>

    </div>

);