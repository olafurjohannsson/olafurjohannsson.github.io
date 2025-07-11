import React from 'react';

// ProjectItem Component
function ProjectItem({ title, description, imgSrc, websiteUrl, technologies = [], type = "project" }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
                <img 
                    src={imgSrc} 
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="p-6">
                {type === "research" && (
                    <span className="inline-block bg-primary-green text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                        Research Publication
                    </span>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {description}
                </p>
                
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-primary-blue text-white text-xs rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                
                <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                    {type === "research" ? "Read Paper" : "View Project"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export function Projects() {
    const projects = [
        {
            title: "Verkþekking",
            description: "Responsive website for a construction firm built with modern web technologies, featuring clean design and optimal performance.",
            imgSrc: "/img/pic1.png",
            websiteUrl: "https://www.verkthekking.is",
            technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
            type: "project"
        },
        {
            title: "Evaluating Icelandic Sentiment Analysis Models",
            description: "Peer-reviewed research paper published at SIGUL 2024 conference, exploring machine learning approaches for Icelandic language processing. Presented in Torino, Italy.",
            imgSrc: "/img/pic3.png",
            websiteUrl: "https://aclanthology.org/2024.sigul-1.11.pdf",
            technologies: ["Python", "Machine Learning", "NLP", "Transformers"],
            type: "research"
        },
        {
            title: "Polaris ATM System",
            description: "Next-generation Air Traffic Control surveillance display system built for mission-critical operations in Iceland and Hungary. Features real-time 4K graphics and high-performance rendering.",
            imgSrc: "https://static.wixstatic.com/media/d35b64_834d1eabfe5045e6bf723ae4a87f9dc5~mv2.jpg/v1/fill/w_1375,h_1000,al_c,q_85,enc_avif,quality_auto/d35b64_834d1eabfe5045e6bf723ae4a87f9dc5~mv2.jpg", // You'll need this image
            websiteUrl: "#", // Or link to case study
            technologies: ["C++", "Qt/QML", "OpenGL", "Real-time Systems"],
            type: "professional"
        },
        {
            title: "Air Archive Surveillance Replayer",
            description: "Web-based application for visualizing and replaying aircraft surveillance data, supporting multiple data formats including ASTERIX radar and ADS-B.",
            imgSrc: "/img/air-archive-preview.png", // You'll need this image
            websiteUrl: "#", // Or link to case study
            technologies: ["Python", "JavaScript", "d3.js", "Django", "Canvas API"],
            type: "professional"
        }
    ];

    return (
        <section id="projects" className="w-full bg-primary-yellow py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-black mb-6">
                        Recent Projects
                    </h2>
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                        A selection of my professional work, research, and personal projects spanning 
                        from mission-critical systems to web applications and academic research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            websiteUrl={project.websiteUrl}
                            technologies={project.technologies}
                            type={project.type}
                        />
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-800 mb-6">
                        Interested in working together or learning more about these projects?
                    </p>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}