import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Primsa shop" greeting="Próximamente"/>
    </div>
  );
}

export default App;
