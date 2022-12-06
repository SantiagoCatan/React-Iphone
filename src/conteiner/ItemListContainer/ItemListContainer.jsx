import React from 'react';
import { useState,useEffect} from 'react';
import { listaDeProductos } from '../../utiles';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ItemListContainer = (prop) => {
  const [Productos,setProductos]=useState(listaDeProductos); 
  
  useEffect(()=>{
    const getProdcutos= new Promise (revolve =>{
        setTimeout(()=>{
          revolve(listaDeProductos)
        },3000);
      });
  })

return (listaDeProductos.map(productos =>{
  return <div className='productos' key={productos.id}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productos.Img}/>
      <Card.Body>
        <Card.Title>{productos.type}</Card.Title>
        <Card.Title>{productos.modelos}</Card.Title>
        <Card.Text>
          Condicion de bateria 100%-
         Equipos sellados con 1 año de garantia
        </Card.Text>
        <Button variant="primary"  id={productos.id}>Detalles</Button>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  </div>;
 }))

};



export default ItemListContainer;