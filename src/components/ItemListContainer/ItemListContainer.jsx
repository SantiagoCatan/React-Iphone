import React from 'react';
import { useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { listaDeProductos } from '../../utiles';
import { Link, useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailConteiner/ItemDetailConteiner';
import { useNavigate } from "react-router-dom";



//traigo de utiles.js los productos y los muestro en pantalla 
function ItemListContainer(props){

  // Declaro el navigate
  const navigate = useNavigate();


    //carga el json para mostrar todos los productos
    const [productos,setProductos]=useState(listaDeProductos); 
    const { categoryId } = useParams();

    //mostrar categorias (filtro) , y realizar una nueva array cuando aprente el navbar 
    useEffect(()=>{
      let categoryItems;
      if (categoryId !== undefined){
        categoryItems = listaDeProductos.filter((p)=>p.type == categoryId)
      }
      new Promise(revolve =>{
      setTimeout(()=>{
        //no funciona el category_Items
        revolve(setProductos(categoryItems || listaDeProductos))
      },3000);
    });
    },[])
    
  if (productos === undefined) return <p>Cargando...</p> 



  //cargar card/box con los datos del json
  return (productos.map(p =>{
    return <div className='productos' key={p.id}>
    <Card style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={p.img} width={150} height={150}/>
        <Card.Body>
          <Card.Title>{p.type}</Card.Title>
          <Card.Title>{p.modelos}</Card.Title>
          <Card.Text>
      
          Equipos sellados con 1 año de garantia
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/detail/${p.id}`)}>Detalles</Button>
        </Card.Body>
      </Card>
    </div>;
  }))

  };

export default ItemListContainer;