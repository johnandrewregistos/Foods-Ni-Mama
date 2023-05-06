import { useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {

  
  const [cart, setCart] = useState([])
  const addToCart = (data) => {
    setCart([ ...cart,{...data, quantity : 1 } ]);
  }
 
  return (
    <div className='bg-main bg-no-repeat bg-cover bg-opacity-10 h-screen overflow-scroll overflow-x-hidden'>
      <Navbar count={cart.length} />
      <Content count={cart.length} cart={cart} addToCart={addToCart} />
    </div>
  )
}

export default App