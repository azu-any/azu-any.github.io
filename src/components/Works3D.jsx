import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from 'react-tilt';
import { github, link } from "../assets";

const ProjectCard3D = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <div className="min-w-[320px] md:min-w-[450px] h-[500px] snap-center">
            <Tilt
                options={{ max: 25, scale: 1.05, speed: 450 }}
                className='bg-tertiary p-5 rounded-2xl w-full h-full shadow-card flex flex-col justify-between border border-white/5'
            >
                <div className='relative w-full h-[60%]'>
                    <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl shadow-lg' />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <button
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label={`View source code for ${name}`}
                        >
                            <img src={link} alt="" className="w-1/2 h-1/2 object-contain" />
                        </button>
                    </div>
                </div>

                <div className='mt-5 flex-grow'>
                    <h3 className="text-white font-bold text-[28px] leading-tight" >{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] line-clamp-3" >{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`} >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </div>
    );
};

const Projects3D = ({ projects }) => {
    return (
        <div className="w-full relative h-[600px] flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            <div className="flex gap-8 px-8 w-max">
                {projects.map((project, index) => (
                    <ProjectCard3D key={`project-3d-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects3D;
