//import { useEffect, useState } from "react";
import styles from './About.module.css';

const skills = [
  { name: "Java", tone: "java", mark: "J" },
  { name: "Spring Boot", tone: "spring", mark: "SB" },
  { name: "React", tone: "react", mark: "R" },
  { name: "Node.js", tone: "node", mark: "N" },
  { name: "MongoDB", tone: "mongo", mark: "M" },
  { name: "Docker", tone: "docker", mark: "D" },
  { name: "AWS", tone: "aws", mark: "A" },
  { name: "Git", tone: "git", mark: "G" },
];

const timeline = [
  {
    year: "2025 - July 2026",
    title: "MCA Final Year",
    org: "K. S. Institute of Technology, Bengaluru",
    body: "Focused on full-stack development, system design, and building product-ready web applications.",
  },
  {
    year: "2024",
    title: "Internship",
    org: "Syslog",
    body: "Worked on practical software development tasks and gained exposure to team-based delivery, debugging, and deployment workflows.",
  },
  {
    year: "2021 - 2024",
    title: "BCA",
    org: "Completed undergraduate studies",
    body: "Built a foundation in programming, databases, and web application development.",
  },
];

function About() {

 /* const [read,setRead] = useState(false);

  useEffect(() => {
    document.title = "About | Gagan's Portfolio";
  }, []);*/

  

  return (
    <div className={styles.container}>
      <section className={styles.heroCard}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>About</p>
          <h1 className={styles.title}>Building clean, practical web products with Java and MERN.</h1>
          <p className={styles.intro}>
            I'm Gagan, an MCA final-year student at K. S. Institute of Technology (CGPA 8.75) with hands-on experience shipping full-stack applications to production. I enjoy turning ideas into dependable interfaces, APIs, and deployed systems.
             I have built full-stack applications with real-world constraints in mind, from API design to frontend structure and
              deployment. I'm currently working on expanding my knowledge in AI integration by buliding a poker game application. I’m especially interested in roles where I can contribute across the stack and keep improving through
              hands-on product work.
          </p>
          <p className={styles.introSecondary}>
            My work spans Java, Spring Boot, React, Node.js, MongoDB, Docker, and AWS. I care about simple flows, maintainable code, and software that feels polished from first click.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryLink}
              href="/resumes/Java%20+%20SpringBoot/Gagan_Babu_Java_SpringBoot_Resume.pdf"
              
              
              target="_blank"
              rel="noreferrer"
            >
               Resume (Java + SpringBoot)
            </a>
            <a
              className={styles.primaryLink}
              href="/resumes/MERN%20Stack/Gagan_Babu_MERN_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
               Resume (MERN Stack)
            </a>
            {/*<button className={styles.secondaryButton} onClick={() => setRead(!read)}>
              {read ? "Show less" : "Read more"}
            </button>*/}
          </div>
        </div>

        <div className={styles.profileCard}>
          {/* <p className={styles.profileLabel}>Quick snapshot</p> */}
          <div className={styles.profileStats}>
            <div>
              <span className={styles.statValue}>MCA</span>
              <span className={styles.statLabel}>K. S. Institute of Technology</span>
              <span className={styles.statLabel}>Bengaluru, Karnataka</span>
            </div>
            <div>
              <span className={styles.statValue}>BCA</span>
              <span className={styles.statLabel}>Surana College</span>
              <span className={styles.statLabel}>Bengaluru, Karnataka</span>
            </div>
            <div>
              <span className={styles.statValue}>Full Stack</span>
              <span className={styles.statLabel}>Java + SpringBoot && MERN</span>
            </div>
            <div>
              <span className={styles.statValue}>Syslog Technologies</span>
              <span className={styles.statLabel}>Machine Learning Intern</span>
              <span className={styles.statLabel}>Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </section>

      {/*{read && (
        <section className={styles.panel}>
          <p className={styles.kicker}>More about me</p>
          <p className={styles.panelCopy}>
            I have built full-stack applications with real-world constraints in mind, from API design to frontend structure and
            deployment. I'm currently working on expanding my knowledge in AI integration by buliding a poker game application. I’m especially interested in roles where I can contribute across the stack and keep improving through
            hands-on product work.
          </p>
        </section>
      )}*/}

      <section className={styles.skillsCard}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Skills</p>
          <h2 className={styles.sectionTitle}>Tech stack</h2>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillBadge}>
              <span className={`${styles.skillMark} ${styles[skill.tone]}`}>{skill.mark}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.timelineCard}>
        <div className={styles.sectionHeader}>
          {/*<p className={styles.kicker}>Timeline</p>*/}
          <h2 className={styles.sectionTitle}>Experience and education</h2>
        </div>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article key={item.title} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <p className={styles.timelineYear}>{item.year}</p>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineOrg}>{item.org}</p>
                <p className={styles.timelineBody}>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.linksCard}>
        <p className={styles.kicker}>Links</p>
          <div className={styles.linkRow}>
            <button className={styles.linkButton} type="button"
              onClick={() => window.open("https://github.com/GaganBabu1", "_blank", "noopener,noreferrer")}>
              GitHub
            </button>

            <button 
              className={styles.linkButton} 
              type="button"
              onClick={() => window.open("https://www.linkedin.com/in/gagan-babu-7a982b2b1/", "_blank", "noopener,noreferrer")}>
              LinkedIn
            </button>
        </div>
      </section>
    </div>
  );
}

export default About;