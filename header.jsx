import React, { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-primary-blue flex items-center justify-between px-8 sm:px-32 py-4 relative z-50">
            <div>
                <button onClick={() => scrollToSection('home')} className="z-50">
                    <img className="rounded-lg w-32 h-32 object-cover" alt="Logo"
                        src="/img/logo1.png" />
                </button>
            </div>

            <nav className="text-white text-lg tracking-widest flex gap-4 lg:gap-12 relative items-center">

                {/* Desktop Navigation */}
                <ul className="hidden xl:flex xl:gap-12 items-center">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="transition-all font-semibold hover:text-primary-red"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="transition-all font-semibold hover:text-primary-red"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="transition-all font-semibold hover:text-primary-red"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="transition-all font-semibold hover:text-primary-red"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="xl:hidden z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="border border-zinc-50 relative select-none cursor-pointer flex justify-center items-center rounded w-12 h-12 p-2.5"
                    >
                        <span className={`bg-white h-[2px] relative transition-all w-6 ${isMenuOpen ? 'rotate-45' : ''
                            } after:bg-white after:block after:h-full after:absolute after:transition-all after:w-full ${isMenuOpen ? 'after:rotate-90 after:top-0' : 'after:top-2'
                            }`}></span>
                    </button>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <ul className="absolute bg-primary-blue top-16 right-0 w-64 text-base shadow-2xl rounded-lg overflow-hidden">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="w-full text-left py-3 px-8 border-b border-gray-600 hover:text-primary-red hover:bg-blue-800 font-semibold transition-all"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="w-full text-left py-3 px-8 border-b border-gray-600 hover:text-primary-red hover:bg-blue-800 font-semibold transition-all"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="w-full text-left py-3 px-8 border-b border-gray-600 hover:text-primary-red hover:bg-blue-800 font-semibold transition-all"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full text-left py-3 px-8 hover:text-primary-red hover:bg-blue-800 font-semibold transition-all"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}