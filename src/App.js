import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
  <div className='app'>
  <NavBar />

  <ItemListContainer name='Profesor '/>
  </div>
  );

};

export default App;
