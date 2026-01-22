import { Link } from 'react-router-dom'
import './home.css'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'


const Home = () => {
  const [animData, setAnimData] = useState(null)

  useEffect(() => {
    let active = true
    fetch('https://assets9.lottiefiles.com/packages/lf20_kyu7xb1v.json')
      .then(r => r.json())
      .then(d => { if(active) setAnimData(d) })
      .catch(() => { /* ignore, keep empty */ })
    return () => { active = false }
  }, [])
  return (
    <div className='heroSect'>
      <div className="hero">
        <motion.h1
          className="heading-gradient"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full-Stack Developer | React, React Native, Node.js, AI-Driven Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I build high-performance web and mobile applications with clean architecture, scalable backends, and modern UI/UX.
        </motion.p>
        <motion.div className="buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link className="link" to={'/portfolio'}><button className='btn-neon'>View My Work</button></Link>
          <Link className="link" to={'/contact'}><button className='btn-ghost'>Contact Me</button></Link>
        </motion.div>
      </div>
      <div className="img">
        <div className="lottieWrap glass">
          {animData ? (
            <Lottie
              animationData={animData}
              loop
              autoplay
            />
          ) : (
            <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:.6}}>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
