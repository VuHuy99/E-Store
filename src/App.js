import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './components/pages/Product/Product';
import Products from './components/pages/Products/Products';
import Home from './components/pages/Home/Home';
import Contact from './components/Contact/Contact';
import Success from './components/pages/Success/Success';
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
const Layout = () =>{
  return(
     <div className='app'>
          <Navbar/>
         <Outlet/>
         <Contact/>
         <Footer/>


     </div>

  )

}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children :[
      
      {
        path: "/",
        element: <Home/>,
      },
      
      {
        path: "/product/:id",
        element:<Product/> ,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/success",
        element: <Success/>,
      },
    ]
  },
  
]);
function App() {
  return (
    <div>

<RouterProvider router={router} />

    </div>
  )
}

export default App

