import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "./Project.module.css";

const projectGroups = {
    java: [
        {
            id: "java-1",
            title: "Banking Management System",
            description: "Full-stack banking application with account management, deposits, withdrawals, and fund transfers. Built with Spring Boot REST APIs, JPA/Hibernate ORM, and a React frontend with concurrent-safe transaction validation.",
            tech: "Spring Boot, React, MySQL, JPA/Hibernate, GitHub Actions",
            language: "Java",
            github: "https://github.com/GaganBabu1/Bank"
        },
        {
            id: "java-2",
            title: "Journal App",
            description: "Secure full-stack journal application with JWT authentication, BCrypt encryption, and role-based access control. Auto-deploys to AWS EC2 via GitHub Actions CI/CD pipeline with Docker containerization.",
            tech: "Spring Boot, MongoDB, React, Docker, AWS",
            language: "Java",
            liveDemo: "https://journal-app-gold-chi.vercel.app/",
            github: "https://github.com/GaganBabu1/journal-app"
        },
        // Add more Java Spring Boot projects here.
        // { id: "java-3", title: "Project Name", description: "Short description.", tech: "Spring Boot, ...", language: "Java" },
    ],
    mern: [
        {
            id: "mern-1",
            title: "Eco Route",
            description: "Full-stack MERN web application providing eco-friendly route recommendations by integrating real-time air quality data, EV charging station locations, and CO₂ impact metrics. Includes JWT authentication and dynamic dashboards.",
            tech: "Node.js, Express, React, MongoDB, Tailwind CSS",
            language: "MERN",
            github: "https://github.com/GaganBabu1/eco-friendly-route-recommendation"
        },
        {
            id: "mern-2",
            title: "Ayur Health Hub",
            description: "Full-stack Ayurvedic healthcare application with patient management, consultation booking, dynamic symptom-disease mapping, and real-time health score tracking. Features role-based admin controls and automated data seeding.",
            tech: "Node.js, Express, React, MongoDB",
            language: "MERN",
            github: "https://github.com/GaganBabu1/ayur-health-hub"
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
                    {/*<p className={styles.sectionLabel}>Showing</p>*/}
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
                            github={project.github}   
                            liveDemo={project.liveDemo}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Project;