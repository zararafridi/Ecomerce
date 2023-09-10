import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingelProduct from './pages/SingelProduct';
import Register from './pages/Register';
import { Login } from './pages/Login';
import Cart from './pages/Cart';


function App() {
  // comment
  const click = ()=> {}
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/singelproduct' element={<SingelProduct/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
