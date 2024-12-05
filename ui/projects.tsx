import React from 'react';
import { ProjectItem } from './projectItem';

export function Projects() {
    return (
        <>
            <section id="projects" className="h-screen w-full bg-primary-yellow  py-16 md:py-20">

                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    My most recent personal projects
                </h2>

                <div className="mx-auto grid w-full h-full 
                grid-cols-1 gap-8 mt-12 p-12 sm:w-3/4 md:gap-10 
                lg:w-full lg:grid-cols-2">

                    <ProjectItem
                        title="Verkþekking"
                        description="Responsive website for a construction firm in HTML and Tailwind CSS."
                        imgSrc="/img/pic1.png"
                        websiteUrl="https://www.verkthekking.is" />

                    <ProjectItem
                        title="Evaluating Icelandic Sentiment Analysis Models Trained on Translated Data"
                        description="Peer-reviewed paper published in 2024 to the SIGUL conference. I held a presentation at Torino, Italy."
                        imgSrc="/img/pic3.png"
                        websiteUrl="https://aclanthology.org/2024.sigul-1.11.pdf" />



                </div>

            </section>
        </>
    );
}