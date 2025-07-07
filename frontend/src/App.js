import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/shop';
import LoginSignup from './pages/loginsignup';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/men' element={<Shop category="men"/>}/>
                <Route path='/women' element={<Shop category="women"/>}/>
                <Route path='/kids' element={<Shop category="kid"/>}/>
                <Route path="/product" element={<div>Product Page</div>}>
                    <Route path=':productId' element={<div>Product Details</div>}/>
                </Route>
                <Route path='/cart' element={<div>Cart Page</div>}/>
                <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
