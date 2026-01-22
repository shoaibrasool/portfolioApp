import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AnimatedBackground from './components/Effects/AnimatedBackground'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

//https://shoaibrasoolportfolio.netlify.app/

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatedBackground/>
      <Navbar/>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Outlet/>
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </>
  )
}

export default App
