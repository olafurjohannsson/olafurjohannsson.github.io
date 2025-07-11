import React, { useState, useEffect } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = 0;
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    
                    // Use a wider buffer zone to prevent oscillation
                    // If currently not scrolled, need to scroll past 200px to activate
                    // If currently scrolled, need to scroll below 100px to deactivate
                    const activateThreshold = 200;
                    const deactivateThreshold = 100;
                    
                    setScrolled(prevScrolled => {
                        if (!prevScrolled && scrollY > activateThreshold) {
                            return true;
                        } else if (prevScrolled && scrollY < deactivateThreshold) {
                            return false;
                        }
                        return prevScrolled; // No change
                    });
                    
                    lastScrollY = scrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`bg-primary-blue/95 backdrop-blur-sm sticky top-0 flex items-center justify-between px-8 sm:px-32 transition-all duration-300 ease-in-out relative z-50 ${
            scrolled ? 'py-3 shadow-lg' : 'py-6'
        }`}>
            <div>
                <button onClick={() => scrollToSection('home')} className="z-50">
                    <img 
                        className={`rounded-lg object-cover transition-all duration-300 ease-in-out ${
                            scrolled ? 'w-12 h-12' : 'w-20 h-20'
                        }`} 
                        alt="Logo"
                        src="/img/logo1.png" 
                    />
                </button>
            </div>

            <nav className={`text-white tracking-widest flex gap-4 lg:gap-12 relative items-center transition-all duration-300 ease-in-out ${
                scrolled ? 'text-sm' : 'text-base'
            }`}>
                {/* Desktop Navigation */}
                <ul className="hidden xl:flex xl:gap-8 items-center">
                    <li>
                        <button onClick={() => scrollToSection('home')} className="transition-all duration-200 font-semibold hover:text-primary-red relative group py-2">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('about')} className="transition-all duration-200 font-semibold hover:text-primary-red relative group py-2">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('projects')} className="transition-all duration-200 font-semibold hover:text-primary-red relative group py-2">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('blog')} className="transition-all duration-200 font-semibold hover:text-primary-red relative group py-2">
                            Blog
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')} className="transition-all duration-200 font-semibold hover:text-primary-red relative group py-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="xl:hidden z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`border border-zinc-50 relative select-none cursor-pointer flex justify-center items-center rounded p-2 transition-all duration-300 ease-in-out ${
                            scrolled ? 'w-8 h-8' : 'w-10 h-10'
                        }`}
                    >
                        <span className={`bg-white h-[1.5px] relative transition-all duration-300 ${
                            scrolled ? 'w-4' : 'w-5'
                        } ${isMenuOpen ? 'rotate-45' : ''} after:bg-white after:block after:h-full after:absolute after:transition-all after:duration-300 after:w-full ${isMenuOpen ? 'after:rotate-90 after:top-0' : 'after:top-1.5'}`}></span>
                    </button>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <ul className="absolute bg-primary-blue/95 backdrop-blur-sm top-12 right-0 w-64 text-base shadow-xl rounded-lg overflow-hidden border border-white/10">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="w-full text-left py-3 px-6 border-b border-gray-600/50 hover:text-primary-red hover:bg-white/5 font-medium transition-all duration-200">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="w-full text-left py-3 px-6 border-b border-gray-600/50 hover:text-primary-red hover:bg-white/5 font-medium transition-all duration-200">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('projects')} className="w-full text-left py-3 px-6 border-b border-gray-600/50 hover:text-primary-red hover:bg-white/5 font-medium transition-all duration-200">
                                    Projects
                                </button>
                            </li>
                            <li>
                            <button onClick={() => window.location.href = '/blog'} className="w-full text-left py-3 px-6 border-b border-gray-600/50 hover:text-primary-red hover:bg-white/5 font-medium transition-all duration-200">
                                    Blog
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('contact')} className="w-full text-left py-3 px-6 hover:text-primary-red hover:bg-white/5 font-medium transition-all duration-200">
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