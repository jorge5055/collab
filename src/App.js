import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [modal,setModal] = useState(false)
  const showModal=()=>{setModal(true)}
  const hideModal=()=>{setModal(false)}
  return (  <CartProvider>
        {modal && <div>gangeeeeee</div>}
      <Header onShowCart={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
