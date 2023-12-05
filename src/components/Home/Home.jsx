import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
  return (
    <div className='heroSect'>
      <div className="hero">
        <h1>I'm Shoaib Rasool</h1>
        <h1>Front-End ReactJS Dev</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugiat perferendis aut cumque accusantium it</p>
        <div className="buttons">
          <Link className="link" to={"/portfolio"}><button>Portfolio</button></Link>
          <Link className="link" to={"/contact"}><button>Contact Me</button></Link>
        </div>
      </div>
      <div className="img">

      </div>
    </div>
  )
}

export default Home
