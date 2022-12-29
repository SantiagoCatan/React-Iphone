import React from 'react'
import { useCartContext } from '../../context/CartContext';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState ,useEffect} from 'react';


const RenderProduct = (props)=>{
  return (props.cart.map((producto)=>{
    return <div className='productos' key={producto.id}>
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nombre</div>
          precio
        </div>
        <Button variant="danger">Eliminar</Button>{' '}
      </ListGroup.Item>
      
    </ListGroup>
    </div>
    }
    )
    )
}

function CarritoComponent() {
  const {cart,agregarProducto} = useCartContext();
  const [totalPrecio,setTotalPrecio] = useState(0)
  const calcularPrecio =(cart)=>{
    let total= 0;
    cart.forEach(element => {
        total+= element.precio
    });
    setTotalPrecio(total)
}
  useEffect(()=>{
    calcularPrecio(cart)
    
  },[])


  if (cart.length == 0)
    {
      return <p>Carrito Vacio</p>
    } 

  return (
    <div>
      <RenderProduct cart={cart} />
      <p>TOTAL: {totalPrecio}</p>
      <Button variant="danger">Limpiar Carrito</Button>
      <Button variant="primary">Comprar</Button>
    </div>
  )


  
  }

export default CarritoComponent
