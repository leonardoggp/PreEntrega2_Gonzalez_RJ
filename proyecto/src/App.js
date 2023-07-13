import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart';

function App() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {

    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [itemAgregado]


    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;

    } else {
      nuevoCarrito.push(itemAgregado);

    }
    setCarrito(nuevoCarrito);


  }

  const nroCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }
  console.log(nroCarrito)

  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito, nroCarrito }}>
        <BrowserRouter>
          <NavBar
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
          />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route
              path="/cart"
              element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;