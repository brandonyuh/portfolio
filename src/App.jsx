import { useState } from "react";
import "./App.scss";

function App() {
  const encEmail = "YnJhbmRvbnl1aEBnbWFpbC5jb20=";
  const encPhone = "MTc3ODcwOTUyMzk=";

  const [filteredSkills, setFilteredSkills] = useState([]);

  const skills = ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "HTML", "CSS", "JavaScript", "SASS", "Bootstrap", "Git", "GitHub", "Heroku", "Netlify", "VS Code", "Postman", "C#", "Java", "Python", "Unity", "C++", "C", "PHP", "JQuery", "Netbeans", "AdoDB", "Android Studio", "Vector Graphics", "JSP", "Axure", "Eclipse", "Subversion", "Mercurial", "Perforce", "BlackBerry API", "Google Maps API"];

  return (
    <>
      <h1>Brandon Yuh</h1>
      <div>
        <a href={"mailto:".concat(atob(encEmail))}>Email: {atob(encEmail)}</a>
      </div>
      <div>
        <a href={"tel:".concat(atob(encPhone))}>Phone: {atob(encPhone)}</a>
      </div>
      <h2>
        TechStack = <span className="bracket">[</span>
      </h2>

      <div className="skill__container">
        {skills.map((skill) => {
          return (
            <span key={skill}>
              <input
                type="checkbox"
                id={skill}
                name={skill}
                value={skill}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilteredSkills([...filteredSkills, e.target.value]);
                  } else {
                    setFilteredSkills(filteredSkills.filter((item) => item !== e.target.value));
                  }
                }}
              />
              <label htmlFor={skill} className="skill__item">
                "{skill}"
              </label>
              ,{" "}
            </span>
          );
        })}
      </div>
      <h2>
        <span className="bracket">]</span>
      </h2>
      <h2>
        {filteredSkills.length !== 0 ? "Projects with: " : ""}
        {filteredSkills.map((skill) => {
          return (
            <span key={skill}>
              <span className="skill__item">"{skill}"</span>,{" "}
            </span>
          );
        })}
      </h2>
    </>
  );
}

export default App;
