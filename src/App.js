import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';


function App() {
  const [countCart, setCountCart] = useState(0);
  const addProductToCart = (count) => {

      setCountCart(count);
  }

  const deleteProductoFromCart = () => {

      setCountCart(0);
  }

  return (
    <div className="App">
      <NavBar countCart={countCart}/>
      <ItemListContainer titulo="Primsa shop" greeting="Próximamente" deleteProduct={deleteProductoFromCart} addCart={addProductToCart}/>
      <ItemDetailContainer/>
    </div>
      
  );
}

export default App;
