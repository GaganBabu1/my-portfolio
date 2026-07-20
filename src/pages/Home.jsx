import { useEffect } from "react";
import SkillBadge from "../components/SkillBadge";
//import Clock from "../components/Clock";
import styles from './Home.module.css';

const skills = ["React.js", "Java", "Spring Boot"," JavaScript", "SQL","NOSQL", "Hibernate / JPA"," Node.js","REST APIs", "HTML", "CSS","MySQL", "MongoDB", "Git", "GitHub","Docker", "AWS","CI/CD","Postman","Maven"];

function Home() {
    useEffect(() => {
        document.title = "Home | Gagan Babu Portfolio";
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.heroCard}>
                <p className={styles.eyebrow}>Full Stack Developer · Java & MERN Stack </p>
                <p className={styles.heroP}>Hi, I'm Gagan — a final-year MCA student at KSIT Bengaluru building full-stack web applications with Java/Spring Boot and the MERN stack. 
                    I've shipped production-ready apps with CI/CD pipelines, AWS deployment, and JWT-secured APIs. 
                    Currently exploring AI integration in web systems.</p>
                <div className={styles.actions}>
                    <a className={styles.primaryLink} href="/projects">See selected work</a>
                    <a className={styles.secondaryLink} href="/contact">Start a conversation</a>
                </div>
            </section>
        
            

            <section className={styles.panel}>
                <p className={styles.kicker}>Focus</p>
                <p className={styles.panelCopy}>
                    Full-stack builds with Java/Spring Boot and MERN, product-minded interfaces, and end-to-end execution from idea to deployed product.
                </p>
            </section>

            <section className={styles.skillsCard}>
                <p className={styles.kicker}>Core tools</p>
                <div className={styles.skillsContainer}>
                    {skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;

