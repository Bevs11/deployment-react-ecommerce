import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from './pages/ProductList';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import ShopContextProvider from './context/ShopContextProvider';
import OrderSuccessful from './pages/OrderSuccessful';

const Container = styled.div``;

function App() {
return (
  <>
    <ShopContextProvider>
      <Announcement />
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='products/productpage' element={ <ProductPage/>} />
          <Route path='/products' element={ <ProductList/>} />
          <Route path='/cart' element={ <CheckoutPage />} /> 
          <Route path='/ordersuccessful' element={ <OrderSuccessful />} /> 
        </Routes>
      </Container>
      <NewsLetter />
      <Footer/>
    </ShopContextProvider>
  </>
)
}

export default App;
