import React, {useContext} from 'react';
import styled from 'styled-components';
import { ShopContext } from "../context/ShopContextProvider";

const Container = styled.div`
margin: 50px;
`;
const Title = styled.h1`
display: flex;
justify-content: center;
margin: 30px;
`;
const Desc = styled.div`
display: flex;
justify-content: center;
`;
const Info = styled.div`
width: 80vw;
font-size: 30px;
`;

const OrderSuccessful = () => {
  const {userInformation} = useContext(ShopContext);
  let state = userInformation;

  return (
    <Container>
        <Title>ORDER SUCCESSFUL</Title>
        <Desc>
          <Info>
          Hey {state.firstname.toUpperCase()}, your order has been sent. Please check your email for your Confirmation Number. Thank you for shopping!
          </Info>
        </Desc>
    </Container>
  )
};

export default OrderSuccessful;