import {useEffect, useState} from "react";
import SkillBadge from "../components/SkillBadge"
import Clock from "../components/Clock";

const skills = ["React", "Java", "Spring Boot", "SQL", "HTML", "CSS"];

function Home()
{
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        document.title = "Home | Gagan Babu Portfolio";
    },[]);
    return(
        <div className="hero-section" style={{ background: isDark ? "#222" : "#fff" }}>
            <button onClick = {()=> setIsDark(!isDark)}>
                {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <Clock />
            <h1>Hi, I'm Gagan babu</h1>
            <p>i build things for the web</p>
            <div className = "skills-conatiner">
                {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </div>

        </div>

    );
}

export default Home;

