import React, { useState, useContext } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';


const CartContext = React.createContext({});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]);
    const [totalPrecio, setTotalPrecio] = useState([])

    const agregarProducto = (item) => {
        const nuevoCart = cart.filter(producto => producto.id !== item.id);
        nuevoCart.push(item);
        setcart(nuevoCart)
    }
    const clearCart = () => setcart([]); //limpieza del carrito

    const busquedaCart = (id) => cart.find(producto => producto.id === id) ? true : false; // recorro y busco dentro del carrito

    const eliminarProducto = (id) => setcart(cart.filter(producto => producto.id != id)); // elimino producto en especifico

    const calcularPrecio =()=>{
        let total= 0;
        cart.forEach(element => {
            total+= element.precio
        });
        setTotalPrecio(total)
    }


    return (
        <CartContext.Provider value={
            {
                clearCart,
                busquedaCart,
                eliminarProducto,
                agregarProducto,
                cart,
                totalPrecio,
                calcularPrecio
            }
        }>
            {children}
        </CartContext.Provider>

    )

}
export default CartProvider 