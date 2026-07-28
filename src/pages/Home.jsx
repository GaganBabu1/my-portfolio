import { useEffect } from "react";
import SkillBadge from "../components/SkillBadge";
//import Clock from "../components/Clock";
import styles from './Home.module.css';

const skills = [
    <img src="/programming_languages_logos/react.png" alt="React.js" />, 
    <img src="/programming_languages_logos/Java.png" alt="Java" />, 
    <img src="/programming_languages_logos/springboot.png" alt="Spring Boot" />,
    <img src="/programming_languages_logos/javascript.png" alt="Javascript" />,
    <img src="/programming_languages_logos/sql.png" alt="Sql" />,
    <img src="/programming_languages_logos/nosql.webp" alt="Nosql" />,
    <img src="/programming_languages_logos/Hibernate Jpa.png" alt="Hibernate/JPA" />,
    <img src="/programming_languages_logos/node.js.png" alt="Node.js" />,
    <img src="/programming_languages_logos/restapi.jpg" alt="Rest apis" />,
    <img src="/programming_languages_logos/html5.png" alt="HTML5" />,
    <img src="/programming_languages_logos/css5.png" alt="CSS5" />,
    <img src="/programming_languages_logos/mysql.png" alt="Mysql" />,
    <img src="/programming_languages_logos/MongoDB.webp" alt="MongoDB" />,
    <img src="/programming_languages_logos/git.png" alt="Git" />,
    <img src="/programming_languages_logos/github.png" alt="Github" />,
    <img src="/programming_languages_logos/docker.png" alt="Docker" />,
    <img src="/programming_languages_logos/aws.webp" alt="AWS" />,
    <img src="/programming_languages_logos/cicd.png" alt="CI/CD" />,
    <img src="/programming_languages_logos/postman.png" alt="Postman" />,
    <img src="/programming_languages_logos/maven.jpg" alt="Maven" />
];

function Home() {
    useEffect(() => {
        document.title = "Home | Gagan Babu Portfolio";
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.heroCard}>
                <p className={styles.eyebrow}>Full Stack Developer | Java & MERN Stack </p>
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

