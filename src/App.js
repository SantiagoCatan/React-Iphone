import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './conteiner/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
import ItemList from './conteiner/ItemListContainer/conteinerProductos/ItemList';
function App() {
  return (

  <BrowserRouter className='app'>
  <NavBar />
  <Routes>

    <Route exact path='/CarWidget' element={< CartWidget/>}/>
    <Route exact path='/ItemList' element={<ItemList/>}/>
  </Routes>
  <ItemListContainer />
  </BrowserRouter> 
  );

};

export default App;
