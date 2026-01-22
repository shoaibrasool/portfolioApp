import './skills.css'

const Skills = () => {
  return (
    <div className="skillsSection">
      <h1>Skills</h1>
      <hr />
      <div className="skillsGrid">
        <div className="skillsCol">
          <h2>Frontend</h2>
          <ul>
            <li>React.js (Hooks, Context API, Memo, Concurrent Mode)</li>
            <li>React Native (Expo & Bare Workflow)</li>
            <li>TypeScript & JavaScript (ES6+)</li>
            <li>Next.js</li>
            <li>Tailwind CSS, Material UI, Ant Design, Bootstrap</li>
            <li>Responsive & Accessible UI Design</li>
          </ul>
        </div>
        <div className="skillsCol">
          <h2>Backend</h2>
          <ul>
            <li>Node.js & Express</li>
            <li>Python & FastAPI</li>
            <li>REST APIs & GraphQL (Apollo)</li>
            <li>WebSockets (Socket.io)</li>
          </ul>
        </div>
        <div className="skillsCol">
          <h2>Databases & Cloud</h2>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase (Auth & Firestore)</li>
            <li>AWS (API Gateway, basic cloud services)</li>
          </ul>
        </div>
        <div className="skillsCol">
          <h2>Tools & Practices</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Jest (Unit Testing)</li>
            <li>Figma (Design to Code)</li>
            <li>Agile / Scrum</li>
            <li>Clean Architecture & OOP</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
