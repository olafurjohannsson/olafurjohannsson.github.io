import React from 'react';

export function Header() {
    return (<>
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
                                        hidden border-b" href="#home">Home</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#about">About</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#experience">Experience</a>
                        </li>
                        <li className="bg-primary-blue z-50">
                            <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
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
                                        hidden border-b" href="#home">Home</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#about">About</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#experience">Experience</a>
                    </li>
                    <li className="bg-transparent z-50">
                        <a className="w-full transition-all xl:block py-3 px-8 xl:py-0 xl:px-0 border-theme 
                                        ease-linear xl:border-none relative hover:text-primary-red font-semibold bg-transparent
                                        hidden border-b" href="#services">Projects</a>
                    </li>
                </ul>
            </nav>

        </header>
    </>)
}