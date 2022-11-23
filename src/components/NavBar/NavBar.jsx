import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =() =>{
    const categories =[
        {name: 'inicio'},
        {name:'Ventas de equipo'},
        {name:'Reparaciones'},];
return(
    <div>
        <nav>
           {categories.map((category,index)=>{
                return(
                    <a href="#" key={index}>
                        {category.name}
                    </a>
                );
           })}
        </nav>

         <CartWidget/>
    </div>
    );
};

export default NavBar;