import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "./Project.module.css";

const projectGroups = {
    java: [
        {
            id: "java-1",
            title: "E-commerce Platform",
            description: "An e-commerce platform developed with Spring Boot and React, featuring user authentication and product management.",
            tech: "Spring Boot, React, MySQL",
            language: "Java"
        },
        {
            id: "java-2",
            title: "Task Management API",
            description: "A backend service for creating and tracking tasks with REST endpoints, validation, and layered architecture.",
            tech: "Spring Boot, JPA, MySQL",
            language: "Java"
        },
        // Add more Java Spring Boot projects here.
        // { id: "java-3", title: "Project Name", description: "Short description.", tech: "Spring Boot, ...", language: "Java" },
    ],
    mern: [
        {
            id: "mern-1",
            title: "Portfolio Website",
            description: "A personal portfolio website built using React to showcase my projects and skills.",
            tech: "React.js, CSS",
            language: "JavaScript"
        },
        {
            id: "mern-2",
            title: "Chat Application",
            description: "A real-time chat application built using Node.js and Socket.io, allowing users to communicate in chat rooms.",
            tech: "Node.js, Socket.io, Express",
            language: "JavaScript"
        },
        // Add more MERN projects here.
        // { id: "mern-3", title: "Project Name", description: "Short description.", tech: "MongoDB, Express, React, Node.js", language: "JavaScript" },
    ]
};

function Project() {
    const [selectedGroup, setSelectedGroup] = useState("java");

    useEffect(() => {
        document.title = "Projects | Gagan Babu Portfolio";
    }, []);

    const activeProjects = projectGroups[selectedGroup];

    return (
        <div className={styles.container}>
            <section className={styles.heroCard}>
                <p className={styles.eyebrow}>Projects</p>
                <h1 className={styles.title}>Selected work across Java Spring Boot and MERN.</h1>
                <p className={styles.description}>
                    Choose a stack to switch between backend-focused Java projects and MERN builds. The code is set up so new projects can be added directly inside each group.
                </p>
            </section>

            <section className={styles.tabsCard}>
                <p className={styles.sectionLabel}>Filter projects</p>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabButton} ${selectedGroup === "java" ? styles.active : ""}`}
                        onClick={() => setSelectedGroup("java")}
                        type="button"
                    >
                        Java Spring Boot
                    </button>
                    <button
                        className={`${styles.tabButton} ${selectedGroup === "mern" ? styles.active : ""}`}
                        onClick={() => setSelectedGroup("mern")}
                        type="button"
                    >
                        MERN
                    </button>
                </div>
            </section>

            <section className={styles.projectsSection}>
                <div className={styles.projectsHeader}>
                    <p className={styles.sectionLabel}>Showing</p>
                    <h2 className={styles.sectionTitle}>
                        {selectedGroup === "java" ? "Java Spring Boot projects" : "MERN projects"}
                    </h2>
                </div>

                <div className={styles.projectsGrid}>
                    {activeProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            language={project.language}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Project;