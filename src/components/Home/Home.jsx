import React from 'react';
import './Home.scss';
import Carousel  from './carousel/carousel'

const Home =() =>{
    return(
        <div className='titulo'> <h1>Bienvenidos a Tienda IPhone</h1></div>

        <Carousel/>        
    )
}

export default Home;