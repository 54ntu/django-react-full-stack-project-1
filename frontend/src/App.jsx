import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowProduct from './components/ShowProduct'
import AddProduct from './components/AddProduct'

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu'
import ProductDetail from './components/ProductDetail'
import UpdateProduct from './components/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (      
      <Router>
        <NavbarMenu/>
        <Routes>    
          <Route exact path='/' Component={ShowProduct}/>
          <Route exact path='/addProduct' Component={AddProduct}/>
          <Route exact path='/:id' Component={ProductDetail}/>
          <Route exact path='/:id/update' Component={UpdateProduct}/>
       </Routes>
      </Router>
  )
}

export default App
