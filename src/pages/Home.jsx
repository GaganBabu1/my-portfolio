import {useState} from "react";
import SkillBadge from "../components/SkillBadge"

function Home()
{
    const [isDark, setIsDark] = useState(false);
    return(
        <div className="hero-section" style={{ background: isDark ? "#222" : "#fff" }}>
            <button onClick = {()=> setIsDark(!isDark)}>
                {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
                
            <h1>Hi, I'm Gagan babu</h1>
            <p>i build things for the web</p>
            <SkillBadge
                skill = "React"/>

            <SkillBadge
                skill = "Java"/>

            <SkillBadge
                skill = "Spring Boot"/>

            <SkillBadge
                skill = "SQL"/>

        </div>

    );
}

export default Home;