import React from "react";


const experiences = [
  {
    role: "Intern - Web Developer",
    company: "Bolt Iot",
    duration: "Feb 2024 - March 2024",
    description: "Tech-skill : MERN stack",
  },
  {
    role: "Intern - Web Developer",
    company: "Miracle Technolabs",
    duration: "May 2024 - June 2024",
    description: "Tech-skill : WordPress",
  },
];

const education = [
  {
    degree: "Higher Secondary Certificate",
    institution: "Shree P.V. Modi School,Jamnagar",
    duration: "2020 - 2022",
  },
  {
    degree: "Information Technology",
    institution: "Charotar University Of Science And Technology,Anand",
    duration: "2022 - 2026",
  },
];

const Experience = () => {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.card}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.heading}>Education</h2>
      <div style={styles.container}>
        {education.map((edu, index) => (
          <div key={index} style={styles.card}>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Experience />
      <Education />
    </div>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#FFFFFF",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#808080",
    padding: "20px",
    margin: "10px",
    width: "60%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0)",
    borderRadius: "30px",
    color: "#000000",
  },
};

export default App;
