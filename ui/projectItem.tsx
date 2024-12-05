import React from 'react';

interface ProjectItemProps {
    title: string;
    description: string;
    imgSrc: string;
    websiteUrl: string;
}

export function ProjectItem({ title, description, imgSrc, websiteUrl }: ProjectItemProps) {
    return (
        <div className="mx-auto transform h-[200px] md:h-[580px] overflow-hidden transition-all hover:scale-105 md:mx-0 
        rounded-lg shadow bg-gray-800 border-gray-700">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="h-full">
                <img className="w-full rounded-t-lg shadow" src={imgSrc} alt={title} />
            </a>
            <div className="p-5 w-full h-[200px]  absolute bottom-0 bg-primary-blue rounded-b-lg">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="mb-3 text-sm font-normal text-gray-400">{description}</p>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
                    text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 
                    focus:ring-blue-800 bottom-4 absolute">
                    Open
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}