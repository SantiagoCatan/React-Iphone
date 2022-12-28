import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Home from './components/Home/Home';
import CartWidget from './components/CartWidget/CartWidget';
import { listaDeProductos } from './utiles';



function App() {
  return (

  <BrowserRouter className='app'>
  <NavBar/>
  <Routes>
  <Route exact path='/' element={< Home/>}/>
    <Route exact path='/items/:categoryId' element={< ItemListContainer/>}/>
    <Route exact path='/items/:productoid' element={<ItemDetailConteiner/>}/>
    <Route exact path='/CarWidget' element={< CartWidget/>}/>

  </Routes>
  </BrowserRouter> 
  );
};
export default App;
