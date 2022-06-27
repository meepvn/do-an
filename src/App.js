import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import GlobalStyle from './GlobalStyle/index.js';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <GlobalStyle>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Product/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
