import { useEffect } from "react";
function Skills()
{
    useEffect(()=>{
        document.title = "Skills | Gagan Babu Portfolio";
    }, []);

    return(
        <div>
            <h1>Skills</h1>
            <p> My skills will go here.</p>
        </div>
    );
}

export default Skills;