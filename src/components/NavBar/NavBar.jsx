import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar =() =>{
    const categories =[
        {name:'inicio',href:'/'},
        {name:'Iphones',href:"/Iphones"},
        {name:'Ipads',href:"/Ipads"},
        {name:'MacBooks' ,href:"/Macbooks",}];
return(
    
    <div className='navbar'>
        <nav>
           {categories.map((category,index)=>{
            const newkey =`menus-${category}-${index}`
                return(
                    <a href={category.href} key={newkey} className='navbar__menu'>
                        {category.name}
                    </a>
                );
           })}
           
        </nav>
        <div className='carrito'><button><CartWidget/></button></div>
    </div>
    );
};

export default NavBar;