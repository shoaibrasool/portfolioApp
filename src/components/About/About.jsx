import './about.css'


const About = () => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <hr />
            <div className="myself">
                <h2>A bit about me</h2>
                <div className="aboutText">
                    <p>
                        I’m a Full-Stack Software Engineer with 4+ years of experience building production-ready web and mobile applications. I specialize in React, React Native, TypeScript, Node.js, and modern UI frameworks.
                    </p>
                    <p>
                        I’ve worked on diverse projects ranging from ride-hailing platforms, real-time chat systems, lead-generation dashboards, and AI-assisted applications. My focus is always on writing clean, maintainable code while delivering smooth user experiences.
                    </p>
                    <p>
                        Currently, I’m expanding my expertise in AI systems, backend development with FastAPI, and scalable cloud architectures, while continuing to ship high-quality React and React Native applications for global clients.
                    </p>
                </div>
            </div>
            <div className="myself">
                <h2>Quick Facts</h2>
                <ul className="facts">
                    <li>🎓 BS Artifitial Intelligence — Air University, Islamabad</li>
                    <li>💼 Full-Stack Developer (Remote)</li>
                    <li>🌍 Working with global clients</li>
                    <li>🧠 AI & System Design enthusiast</li>
                </ul>
            </div>
            <div className="myself">
                <h2>Services</h2>
                <div className="services">
                    <div className="skill">
                        <span>Web Application Development</span>
                        <hr />
                        <p>Modern, responsive, and accessible web apps with React and Next.js.</p>
                    </div>
                    <div className="skill">
                        <span>Mobile App Development</span>
                        <hr />
                        <p>React Native apps for iOS & Android (Expo & Bare Workflow).</p>
                    </div>
                    <div className="skill">
                        <span>API Development & Integration</span>
                        <hr />
                        <p>Node.js, Express, FastAPI, REST/GraphQL, and third‑party integrations.</p>
                    </div>
                    <div className="skill">
                        <span>Bug Fixing & Performance Optimization</span>
                        <hr />
                        <p>Profiling, bundle size reduction, memoization, and UX polish.</p>
                    </div>
                    <div className="skill">
                        <span>UI/UX Implementation from Figma</span>
                        <hr />
                        <p>Pixel-perfect, responsive UI with Tailwind, MUI, Ant Design, Bootstrap.</p>
                    </div>
                    <div className="skill">
                        <span>AI-Assisted Application Development</span>
                        <hr />
                        <p>Integrate AI features and assistants into products, end‑to‑end.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
