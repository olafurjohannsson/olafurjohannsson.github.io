import React from 'react';

export function Home() {
    return (<>
        <section id="home"
            className="bg-primary-blue flex relative h-[calc(75vh)] flex-col items-center justify-center text-center 
            lg:flex-row 2xl:max-w-[2000px] mx-auto max-w-[1000px]">
            <div className="flex flex-col items-center lg:w-2/3 md:w-2/3 z-50 p-4">
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
    </>)
}