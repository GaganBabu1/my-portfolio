import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const projects = [
    {
        id:1,
        title:"Portfolio Website",
        description:"A personal portfolio website built using React to showcase my projects and skills.",
        tech:"React, CSS",
        language:"JavaScript"
    },

    {
        id:2,
        title:"E-commerce Platform",
        description:"An e-commerce platform developed with Spring Boot and React, featuring user authentication and product management.",
        tech:"Spring Boot, React, MySQL",
        language:"Java"
    },

    {
        id:3,
        title:"Chat Application",
        description:"A real-time chat application built using Node.js and Socket.io, allowing users to communicate in chat rooms.",
        tech:"Node.js, Socket.io, Express",
        language:"JavaScript"
    }
];

function Project()
{
    useEffect(()=>{
            document.title = "Projects | Gagan Babu Portfolio";
        },[]);
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project)=>(
                <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                language={project.language}
                />

            ))}
        </div>
    );
}

export default Project;