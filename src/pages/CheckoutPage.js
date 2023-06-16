import styled from "styled-components";
import Checkout from "../components/Checkout";
import ShoppingBag from "../components/ShoppingBag";
import OrderSummary from "../components/OrderSummary";
import { ShopContext } from "../context/ShopContextProvider";
import { popularProducts } from "../data";
import { useContext, useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div`
font-size: 40px;
font-weight: bold;
margin: 30px 30px;
`;

const CheckoutPage = () => {
  const {cartItems} = useContext(ShopContext);
  
  return (
    <Container>
        <Wrapper>
            <Title>CART</Title>
            <div>
              {popularProducts.map((product)=> { 
                if (cartItems[product.id] !== 0) {
                  return <ShoppingBag name={product.name}
                  img={product.img}
                  price={product.price}
                  id={product.id}
                  />         
                }
              }                
               )}
            </div>
            <OrderSummary/>
        </Wrapper>        
        <Checkout/>
    </Container>
  )
};

export default CheckoutPage;