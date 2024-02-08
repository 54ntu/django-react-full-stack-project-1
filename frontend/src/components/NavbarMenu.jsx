import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavbarMenu = () => {
  return (
    <div>

         <Navbar bg="dark">
            <Container>
            <Nav className="me-auto">
                <NavLink className="show-product-nav" to="/">Home</NavLink>
                <NavLink className="show-product-nav" to="/addProduct">Add product</NavLink>
               
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarMenu