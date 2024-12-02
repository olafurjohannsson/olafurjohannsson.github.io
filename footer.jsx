import React from 'react';

export function Footer() {
    return (
        <>
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
        </>
    )
}