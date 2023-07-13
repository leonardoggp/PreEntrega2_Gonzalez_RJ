import { useEffect, useState } from 'react';
import { pedirDatos } from './pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria || 'todos';
  console.log(categoria)
 

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((res) => {
        console.log(res);
        let productosFiltrados = res;
        if (categoria && categoria !== 'todos') {
          productosFiltrados = res.filter((prod) => prod.categoria === categoria);
          setTitulo(categoria);
        } else {
          setTitulo('Productos');
        }
        setProductos(productosFiltrados);
        setLoading(false)
      });
      
  }, [categoria]);
  
  
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <ItemList productos={ productos } titulo={titulo} loading={loading} />
    </div>
  );
};

export default ItemListContainer;