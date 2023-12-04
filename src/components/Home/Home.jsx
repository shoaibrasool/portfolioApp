import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
  return (
    <div className='heroSect'>
      <div className="hero">
        <h1>I'm Shoaib Rasool</h1>
        <h1>I code cool websites</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugiat perferendis aut cumque accusantium it</p>
        <div className="buttons">
          <button><Link className="link" to={"/portfolio"}>Portfolio</Link></button>
          <button><Link className="link" to={"/contact"}>Contact Me</Link></button>
        </div>
      </div>
      <div className="img">
        
      </div>
    </div>
  )
}

export default Home
