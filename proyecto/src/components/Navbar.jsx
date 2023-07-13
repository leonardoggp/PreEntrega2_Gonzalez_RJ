
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar({ categoriaSeleccionada, setCategoriaSeleccionada }) {
  

  const [expanded, setExpanded] = useState(false);

  const handleToggleNav = () => {
    setExpanded(!expanded);
  };

  const handleSelectCategory = (category) => {
    setCategoriaSeleccionada(category.toLowerCase());
  };

  return (
    <Navbar expand="md" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mr-2">
          TecnoStore
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggleNav} />

        <Navbar.Collapse id="navbar-nav" className={expanded ? 'show' : ''}>
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleSelectCategory('all products')}
              className={categoriaSeleccionada === 'all products' ? 'active' : ''}
            >
              Productos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/productos/cells"
              onClick={() => handleSelectCategory('cells')}
              className={categoriaSeleccionada === 'cells' ? 'active' : ''}
            >
              Celulares
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/productos/tablets"
              onClick={() => handleSelectCategory('tablets')}
              className={categoriaSeleccionada === 'tablets' ? 'active' : ''}
            >
              Tablets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link 
         as={Link}
         to="/cart"
        className="ml-auto">
          <CartWidget />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
