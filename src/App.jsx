import "./App.scss";

function App() {
  const skills = ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub", "Heroku", "Netlify", "VS Code", "Postman", "C#", "Java", "Python", "Unity", "C++", "C", "Linux", "Windows", "MacOS", ];
  return (
    <>
      <h1>Brandon Yuh</h1>
      <h2>
        TechStack = <span className="bracket">[</span>
      </h2>

      <div className="skill__container">
        {skills.map((skill, index) => {
          return (
            <span key={index}>
              <span className="skill__item">"{skill}"</span>,{" "}
            </span>
          );
        })}
      </div>
      <h2>
        <span className="bracket">]</span>
      </h2>
    </>
  );
}

export default App;
