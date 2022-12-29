import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import CarritoComponent from './components/compra/CarritoComponent';
import Home from './components/Home/Home';
import CartWidget from './components/CartWidget/CartWidget';
import { listaDeProductos } from './utiles';
import CartProvider from './context/CartContext';
import React from 'react';


function App() {
  return (

  <BrowserRouter className='app'>
    <CartProvider>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={< Home/>}/>
        <Route exact path='/items/:categoryId' element={< ItemListContainer/>}/>
        <Route exact path='/detail/:productoId' element={<ItemDetailConteiner/>}/>
        <Route exact path='/Carrito' element={<CarritoComponent/>}/>  
      </Routes>
    </CartProvider>
  </BrowserRouter> 
  );
};
export default App;
