import './about.css'


const About = () => {
    return (
        <div className='about'>
            <h1>About ME</h1>
            <hr />
            <div className="myself">
                <h2>A Bit about Me</h2>
                <p>
                    I am a Front-End React Developer working in Enigma Software Solutions from 6 months. I have a strong grip on different libraries used in react such as Redux etc. 
                </p>
            </div>
            <div className="myself">
                <h2>Skills:</h2>
                <div className="skills">
                    <div className="skill">
                        <span>React</span>
                        <hr />
                    </div>
                    <div className="skill">
                        <span>Redux ToolKit</span>
                        <hr />
                    </div>
                    <div className="skill">
                        <span>Javascript</span>
                        <hr />
                    </div>
                    <div className="skill">
                        <span>Html/Css</span>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="myself">
                <h2>Services:</h2>
                <div className="services">
                    <div className="skill">
                        <span>UI & UX Design</span>
                        <hr />
                        <p>I design applications that are responsive for all devices and the desing won;t be effected by the width of the screen</p>

                    </div>
                    <div className="skill">
                        <span>Mobile Apps</span>
                        <hr />
                        <p>I design applications that are responsive for all devices and the desing won;t be effected by the width of the screen</p>

                    </div>
                    <div className="skill">
                        <span>Responsive Applications</span>
                        <hr />
                        <p>I design applications that are responsive for all devices and the desing won;t be effected by the width of the screen</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
