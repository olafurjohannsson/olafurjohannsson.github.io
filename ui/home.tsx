import React, { useEffect, useState } from 'react';
import { startAnimation } from '../src/animation';

export function Home() {
    const [currentRole, setCurrentRole] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const roles = [
        "Software Developer",
        "Problem Solver",
        "Full-Stack Engineer",
        "Tech Enthusiast"
    ];

    useEffect(() => {
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        const timer = setTimeout(() => {
            startAnimation(isMobile());
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Rotate roles every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section
                id="home"
                className="bg-primary-blue flex relative min-h-screen flex-col items-center justify-center text-center px-4 py-16"
            >
                {/* Canvas Background */}
                <div className="absolute inset-0 opacity-50">
                    <canvas id="canvas" className="w-full h-full"></canvas>
                </div>

                {/* Main Content */}
                <div className={`flex flex-col items-center max-w-3xl z-10 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

                    {/* Main Heading */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold">
                            Hi, I'm{' '}
                            <span className="text-primary-red">
                                Ólafur Aron
                            </span>
                        </h1>

                        {/* Dynamic Role */}
                        <h2 className="text-xl md:text-2xl text-primary-yellow font-medium">
                            {roles[currentRole]}
                        </h2>


                    </div>

                    {/* Single Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="rounded-lg px-8 py-3 bg-primary-red text-white font-medium hover:bg-red-600 transition-all duration-300"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="rounded-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-blue transition-all duration-300 font-medium"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>

                {/* Wave Divider - Fixed Bottom Position */}
                <div className="absolute bottom-0 left-0 w-screen h-12 overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 3431 347" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                        preserveAspectRatio="none"
                        style={{
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: '1.41421'
                        }}>
                        <path
                            d="M0,347c455.317,-299.761 942.752,-432.753 1462.31,-259.881c862.781,236.634 1505.13,306.177 1968.69,-87.119l0,347l-3431,0Z"
                            style={{
                                fill: 'rgb(228,228,231)',
                                fillRule: 'nonzero'
                            }}></path>
                    </svg>
                </div>
            </section>
        </>
    );
}