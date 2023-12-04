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
        path: "/hello",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
