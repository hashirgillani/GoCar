import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'

import Blog from './Components/Blog/Blog.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'

import Services from './Components/Services/Services.jsx'

//  const router = createBrowserRouter([

//    {path:"/",
//     element: <Layout/>,
//     children: [{
//       path:"/about",
//       element: <About/>
//     },{
//       path: "/home",
//       element: <Home/>
//     }]
//    }

//  ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element  = {<Layout/>}>

      <Route path='' element = {<Home/>}></Route>
      <Route path='blog' element = {<Blog/>}></Route>
      <Route path='contact' element = {<Contacts/>}></Route>
      <Route path='services' element = {<Services/>}></Route>
  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

    
  </StrictMode>
)
