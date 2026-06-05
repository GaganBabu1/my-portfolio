function ProjectCard({title,description,tech,language})
{
    return(
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech used: {tech}</p>
            <p>Language: {language}</p>
        </div>

    );
}

export default ProjectCard;