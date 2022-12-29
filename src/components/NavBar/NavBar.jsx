import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { listaDeProductos } from '../../utiles';
import { useContext } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { ThemeContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';



const NavBar =() =>{
    const navigate = useNavigate();
    const Inicio =[{name:'inicio',href:'/'}];

    const categories =[
        {name:'Iphones',href:"/items/Iphones", id:"Iphones"},
        {name:'Macbook',href:"/items/Macbook", id:"Macbook"},
        {name:'Watch',href:"/items/Watch", id:"Watch"},
        {name:'Ipads',href:"/items/Ipads", id:"Ipads"}];
        
return(
    <div className='navbar' style={{backgroundColor:'grey'}}>
        {
            Inicio.map((menu)=>{
                const newkey =`${Inicio.id}`;
            return <Link className='Navbar_inicio' to={menu.href} key={newkey}>{menu.name}</Link>}
            )
            }
        
           {categories.map((category,index)=>{
            const newkey =`${category.id}`;
        
            return(
                    <Link  className='Navbar_inicio'to={category.href} key={newkey}>{category.name}</Link>
                )
           })
        }

        <div className='carrito'><button onClick={()=>navigate('/Carrito')}><CartWidget/></button></div>
    </div>)
};


export default NavBar;