import React from 'react';

export function About() {
    const techStack = [
        "C++", "C#", "Python", "JavaScript", "Qt/QML", "OpenGL", "SQL", "React", "Azure", "Django"
    ];

    const interests = [
        "Data Visualization", "Machine Learning", "User Interfaces", "High-Performance Computing", "GPU Rendering"
    ];

    return (
        <>
            <section id="about"
                className="bg-zinc-200 px-6 md:px-12 py-16 md:py-24 relative"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23264653' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '10px 10px'
                }}>

                {/* Photo - separate row */}
                <div className="flex justify-center mb-12">
                    <img src="/img/olafur.JPG"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl"
                        alt="Ólafur Aron Jóhannsson" />
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Image + About Text */}
                    <div className="lg:w-1/2 flex flex-col space-y-8">


                        {/* About Text */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue text-center mb-8">
                                About me
                            </h1>

                            <div className="space-y-6 text-lg text-slate-900">
                                <p className="text-justify leading-relaxed">
                                    I'm a Full Stack Software Engineer with extensive expertise spanning from low-level system calls and graphics APIs
                                    to high-level web frameworks. Over the past decade, I've built everything from mission-critical Air Traffic Management
                                    systems for Iceland's 5.4 million square kilometer control area to ticketing platforms serving the Nordic countries.
                                </p>

                                <p className="text-justify leading-relaxed">
                                    Currently, I serve as a Senior Software Engineer at Tern Systems, where I design and develop software that air traffic
                                    controllers rely on daily. My work includes the Polaris aircraft surveillance display system built with C++, Qt/QML, and OpenGL,
                                    and the Air Archive web-based surveillance replayer using Python, JavaScript, and d3.js.
                                </p>

                                <p className="text-justify leading-relaxed">
                                    Beyond my professional work, I'm passionate about pushing technological boundaries. I hold a degree from Reykjavík University
                                    and have authored a peer-reviewed publication on sentiment analysis using machine learning. In my free time, I experiment with
                                    GPU rendering techniques, C++ optimizations, transformer model training, and building experimental web applications.
                                </p>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <a
                                    href="https://github.com/olafurjohannsson/olafurjohannsson/blob/main/CV.pdf"
                                    target="_blank"
                                    className="inline-flex items-center px-3 py-3 bg-primary-red text-white rounded-lg
                                     hover:bg-white hover:text-primary-red transition-colors font-medium"
                                >
                                    Download Full CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Skills & Research */}
                    <div className="lg:w-1/2 flex flex-col mt-10 space-y-8">
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl font-semibold text-center text-primary-blue mb-4">Technologies & Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-primary-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h3 className="text-xl font-semibold text-center text-primary-blue mb-4">Areas of Interest</h3>
                            <div className="flex flex-wrap gap-3">
                                {interests.map((interest, index) => (
                                    <span
                                        key={interest}
                                        className="px-4 py-2 bg-primary-green text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-all duration-300"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Research & Publications */}
                        <div>
                            <h3 className="text-xl font-semibold text-center text-primary-blue mb-4">Research & Publications</h3>
                            <div className="bg-white/50 rounded-lg p-4 border-l-4 border-primary-green">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    "Evaluating Icelandic Sentiment Analysis Models Trained on Translated Data"
                                </h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <span className="font-medium">Authors:</span> Ólafur A. Jóhannsson, Birkir H. Arndal, Eysteinn Ö. Jónsson, Stefán Ólafsson, Hrafn Loftsson
                                </p>
                                <p className="text-sm text-gray-700 mb-2">
                                    <span className="font-medium">Published:</span> SIGUL 2024 Workshop, Reykjavík University
                                </p>
                                <p className="text-sm text-gray-700">
                                    Research on sentiment classification using machine-translated data, comparing transformer models
                                    (RoBERTa, IceBERT, ELECTRA) for Icelandic language processing.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* After your bio paragraphs */}

                </div>

            </section>
        </>
    );
}