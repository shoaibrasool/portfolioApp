import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Skills from './components/Skills/Skills.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/testimonials",
        element: <Testimonials/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
