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
                        I am a seasoned Software Developer with over a decade of experience delivering reliable and robust software solutions across a 
                        wide range of industries. My work includes developing mission-critical systems for Air Traffic Control for Iceland and Hungary, 
                        developing ticketing platforms used by the Nordic countries, data warehousing solutions, web services, simple websites and beyond.
                        </p>
                        <p className="text-lg text-slate-900 mt-6 text-pretty text-justify">
                        I currently work at Tern Systems as a Senior Software Engineer where I contribute to mission-critical
                         systems supporting Iceland's expansive airspace management. 
                        </p>
                        <p className="text-lg text-slate-900 mt-6 text-pretty text-justify">
                            I have deep expertise in C++, Python, C# .NET, JavaScript and SQL and have used these languages to build
                            a wide array of applications. My main interests lie in Data Visualization, User Interfaces, 
                                High-Performance Computing, Machine Learning and Neural Networks.
                        </p>


                    </div>
                </div>
            </section>
        </>
    );
}