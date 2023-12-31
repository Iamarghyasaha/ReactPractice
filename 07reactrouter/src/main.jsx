import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:'user',
        element: <User/>
      },
      {
        path:'user/:id',
        element: <User/>
      },
      {
        path:'github',
        element: <Github/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
