import { useEffect, useState } from "react";
import { pedirItem } from "./pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 
  

  useEffect(() => {
    pedirItem(id)
      .then((item) => {
        
        setItem(item);
      })
      .catch((error) => {
        
        console.log(error.error); 
      });
  }, [id]);

  return (
    <>
      {item && <ItemDetail item={item} />}
    </>
  );
};

export default ItemDetailContainer;