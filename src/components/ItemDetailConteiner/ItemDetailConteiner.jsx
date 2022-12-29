
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { listaDeProductos } from '../../utiles';
import { useContext } from 'react';
import { useCartContext } from '../../context/CartContext';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
 

export const ItemDetailConteiner = ()=>{
    // OBTENGO LA FUNCION AGREGAR DECLARADA EN CARTCONTEXT
    // Obtenemos el producto de la URL /detail/item1
    const { productoId } = useParams();
    //agregarProducto(productoId);

    const {cart,agregarProducto} = useCartContext();

    // // Buscamos y seteamos el producto con el productId recibido por parametro
     const [productState,setProductState]=useState(null);

    useEffect (()=>{
        let product;
        if (productoId !== undefined){
            product = listaDeProductos.find((p)=>p.id == productoId)
        }
        new Promise((revolve,reject) =>{
            setTimeout(()=>{
                if (product !== undefined)
                    revolve(setProductState(product))
                else
                    reject("No se encontro el producto") 
            },1000);
        }).catch((err)=>{
            setProductState("fail")

        });

    },[])


    if (productState === null) return  (<p>Cargando...</p>)

    if (productState === "fail") return <ErrorComponent/>
    
    const agregarCarrito = ()=>{
        if(productState === null) console.log("no existe producto")

        agregarProducto(productState)
        console.log(cart)
    }

        
    return(
        <ItemDetail onClickFunction={agregarCarrito}/>
      
    )
    }
export default ItemDetailConteiner ;
