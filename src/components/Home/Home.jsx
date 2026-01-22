import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
  return (
    <div className='heroSect'>
      <div className="hero">
        <h1>Full-Stack Developer | React, React Native, Node.js, AI-Driven Solutions</h1>
        <p>I build high-performance web and mobile applications with clean architecture, scalable backends, and modern UI/UX.</p>
        <div className="buttons">
          <Link className="link" to={'/portfolio'}><button>View My Work</button></Link>
          <Link className="link" to={'/contact'}><button>Contact Me</button></Link>
        </div>
      </div>
      <div className="img">

      </div>
    </div>
  )
}

export default Home
