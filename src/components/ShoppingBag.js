import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

/*Styling */
const Container = styled.div``;
const Info = styled.div``;
const Product = styled.div`
display: flex;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
padding-left: 30px;
`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 30px;
margin: 5px 10px;
`;
const ProductPrice = styled.div`
font-size: 30px;

`;
const Hr = styled.hr`
margin: 20px 0;
`;
/*End of Styling */

    //Component that displays all items inside the cart
const ShoppingBag = (props) => {
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    const [partialTotal, setPartialTotal] = useState();

    useEffect(() => {
        setPartialTotal(cartItems[props.id]*props.price);
    }, [removeFromCart, addToCart]);

    return (
    <Container>
        <Info>
            <Product>
                <ProductDetail>
                    <Image src={props.img} />
                    <Details>
                        <ProductName><b>Product:</b>{props.name}</ProductName>
                        <ProductId><b>ID:</b>00{props.id}</ProductId>

                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <button onClick={() => removeFromCart(props.id)}>
                            <RemoveIcon/>
                        </button>
                        <ProductAmount>{cartItems[props.id]}</ProductAmount>
                        <button onClick={() => addToCart(props.id)}>
                            <AddIcon/>
                        </button>
                    </ProductAmountContainer>
                    <ProductPrice>PerPiece: P {props.price}.00</ProductPrice>
                    <ProductPrice>Total: P {partialTotal}.00</ProductPrice>
                </PriceDetail>
            </Product>
            <Hr/>
        </Info>          
                

    </Container>
  )
}

export default ShoppingBag;
