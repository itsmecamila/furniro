import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/Register';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';
import ProductDetail from './routes/ProductDetail';
import Home from './routes/Home';
import Authentication from './components/Authentication';
///Importação da biblioteca de rotas

///Função que define rotas
export default function Router(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <SignUp />} />
            <Route path="/" element={<Home />} />
            <Route element={<Authentication/>}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:product" element={<ProductDetail />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      )
}