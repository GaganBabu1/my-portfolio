

function ProjectCard({ title, description, tech, language, github, liveDemo })
{
    return(
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech used: {tech}</p>
            <p>Language: {language}</p>

            {(github || liveDemo) && (
                <div className="project-links">
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    )}
                    <br />
                    {liveDemo && (
                        <a href={liveDemo} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </div>

    );
}

export default ProjectCard;