import { useEffect, useState } from "react";
import SkillBadge from "../components/SkillBadge";
import styles from "./Skills.module.css";

const skillLogo = (fileName) => `/programming_languages_logos/${encodeURIComponent(fileName)}`;

const createSkill = (label, fileName) => ({
    label,
    node: (
        <span className={styles.skillContent}>
            <img className={styles.skillIcon} src={skillLogo(fileName)} alt={`${label} logo`} loading="lazy" />
            <span className={styles.skillLabel}>{label}</span>
        </span>
    ),
});

const vercelMark = (
    <svg className={styles.skillIcon} viewBox="0 0 128 128" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M64 20 112 104H16L64 20Z" />
    </svg>
);

const skillCategories = [
    {
        id: 1,
        category: "Languages",
        skills: [
            createSkill("Java", "Java.png"),
            createSkill("Javascript", "javascript.png"),
            createSkill("Python", "python.png"),
            createSkill("SQL", "sql.png"),
            createSkill("NoSQL", "nosql.webp"),
        ]
    },
    {
        id: 2,
        category: "Frameworks",
        skills: [
            createSkill("React", "react.png"),
            createSkill("Spring Boot", "springboot.png"),
            createSkill("Hibernate/JPA", "Hibernate Jpa.png"),
            createSkill("Node.js", "node.js.png"),
        ]
    },
    {
        id: 3,
        category: "Web & APIs",
        skills: [
            createSkill("Rest APIs", "restapis.png"),
            createSkill("HTML", "html5.png"),
            createSkill("CSS", "css5.png"),
        ]
    },
    {
        id: 4,
        category: "Databases",
        skills: [
            createSkill("MySQL", "mysql.png"),
            createSkill("MongoDB", "MongoDB.webp"),
        ]
    },
    {
        id: 5,
        category: "Tools & Platforms",
        skills: [
            createSkill("Git", "git.png"),
            createSkill("GitHub", "github.png"),
            createSkill("Ci/CD", "cicd.png"),
            createSkill("Postman", "postman.png"),
            createSkill("Maven", "maven.jpg"),
        ]
    },
    {
        id: 6,
        category: "Cloud & Devops",
        skills: [
            createSkill("Docker", "docker.png"),
            createSkill("AWS", "aws.webp"),
            {
                label: "Vercel",
                node: (
                    <span className={styles.skillContent}>
                        {vercelMark}
                        <span className={styles.skillLabel}>Vercel</span>
                    </span>
                ),
            },
        ]
    }
];

function Skills() {
    const [selected, setSelected] = useState(skillCategories[0].category);

    useEffect(() => {
        document.title = "Skills | Gagan Babu Portfolio";
    }, []);

    const activeCategory = skillCategories.find(
        (cat) => cat.category === selected
    );

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.heroCard}>
                {/*<p className={styles.eyebrow}>Expertise</p>*/}
                <h1 className={styles.title}>Full-stack capabilities across modern web tech.</h1>
                {/*<p className={styles.description}>
                    Proficient in Java, Spring Boot, React, Node.js, and cloud technologies. I build scalable backends, responsive frontends, and deploy production-ready applications.
                </p>*/}
            </section>

            {/* Categories Section */}
            <section className={styles.categoriesSection}>
                <p className={styles.categoriesLabel}>Select Category</p>
                <div className={styles.categoryTabs}>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoryButton} ${selected === cat.category ? styles.active : ""}`}
                            onClick={() => setSelected(cat.category)}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Skills Display */}
            <div className={styles.skillsGridWrapper}>
                <div className={styles.skillsGrid}>
                    {activeCategory && activeCategory.skills.map((skill) => (
                        <SkillBadge key={skill.label} skill={skill.node} className={styles.skillPageBadge} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;