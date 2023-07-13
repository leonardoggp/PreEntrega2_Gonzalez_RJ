import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      setCardHeight(height);
    }
  }, []);

  return (
    <div>
      <Card ref={cardRef} style={{ maxWidth: '345px' }}>
        <Card.Img
          style={{
            height: cardHeight,
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          variant="top"
          src={producto.image}
          alt={producto.name}
        />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>${producto.price}</Card.Text>
          <Card.Text>{producto.categoria}</Card.Text>
        </Card.Body>
        
        <Card.Footer>
          <Link className='btn btn-primary btn-sm'  to={`/item/${producto.id}`}>Detalle del producto</Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Item;
