import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
