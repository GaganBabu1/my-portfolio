import { useEffect, useState } from "react";

function About() {

  const [read,setRead] = useState(false);

  useEffect(() => {
    document.title = "About | Gagan's Portfolio";
  }, []);

  

  return (
    <div>
      <h1>About Me</h1>
      <p>MCA final-year student at K. S. Institute of Technology (CGPA 8.2) with hands-on experience in full-stack web development and 
        machine learning and strong hands-on skills in Java, Spring Boot, React, and MySQL. </p>
      <button onClick={() => setRead(!read)}>
        {read ? "Read Less" : "Read More"}
      </button>
      {read && (
        <div>
            <p>I have built production-grade full-stack applications and ML systems
                using Java, Spring Boot, and React. I enjoy solving real-world problems
                and am actively looking for opportunities where I can contribute and grow
                as a developer.</p>
        </div>
      )}
    </div>
  );
}

export default About;