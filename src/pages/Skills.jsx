import { useEffect, useState } from "react";
import SkillBadge from "../components/SkillBadge";
import styles from "./Skills.module.css";

const skillCategories = [
    {
        id: 1,
        category: "Languages",
        skills: ["Java", "Javascript", "Python", "SQL", "NoSQL"]
    },
    {
        id: 2,
        category: "Frameworks",
        skills: ["React", "Spring Boot", "Hibernate/JPA", "Node.js"]
    },
    {
        id: 3,
        category: "Web & APIs",
        skills: ["Rest APIs", "HTML", "CSS"]
    },
    {
        id: 4,
        category: "Databases",
        skills: ["MySQL", "MongoDB"]
    },
    {
        id: 5,
        category: "Tools & Platforms",
        skills: ["Git", "GitHub", "Ci/CD", "Postman", "Maven"]
    },
    {
        id: 6,
        category: "Cloud & Devops",
        skills: ["Docker", "AWS", "Vercel"]
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
                <p className={styles.eyebrow}>Expertise</p>
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
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;