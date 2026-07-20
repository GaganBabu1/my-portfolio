import { useEffect, useState } from "react";
import SkillBadge from "../components/SkillBadge";

const skillCategories = [
    {
        id:1,
        category:"Frontend",
        skills:["React", "HTML", "CSS"]
    },

    {
        id:2,
        category:"Backend",
        skills:["Java", "Spring Boot", "MySQL"]
    },

    {
        id:3,
        category:"Tools",
        skills:["Git", "Docker", "AWS"]
    }
];
function Skills()
{
    const [selected, setSelected] = useState("Frontend");
    useEffect(()=>{
        document.title = "Skills | Gagan Babu Portfolio";
    }, []);

    const activeCategory = skillCategories.find(
        (cat) => cat.category === selected);

    return(
        <div>
            <h1>Skills</h1>
            <div>
                {skillCategories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setSelected(cat.category)}
                    style={{
                    fontWeight: selected === cat.category ? "bold" : "normal",
                    textDecoration: selected === cat.category ? "underline" : "none",
                    marginRight: "12px"
                    }}
                >
                    {cat.category}
                </button>
         ))}
            </div>
            <div className="skills-container">
                {activeCategory.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;