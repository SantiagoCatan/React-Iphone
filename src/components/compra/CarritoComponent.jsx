import React from 'react'
import { useCartContext } from '../../context/CartContext';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



function CarritoComponent() {
  const {cart,agregarProducto} = useCartContext();

  if (cart.length == 0)
{
  return <p>Carrito Vacio</p>
} 

  return (
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Button variant="danger">Eliminar</Button>{' '}
          </ListGroup.Item>
          <Button variant="danger">Limpiar Carrito</Button>{' '}
          <Button variant="primary">Comprar</Button>{' '}
        </ListGroup>


      );
    }

export default CarritoComponent
