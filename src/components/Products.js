import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product.js';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap
`;

  //Component for the ProductList that displays all available products for sale
const Products = () => { 
  return (
    <Container>
      {popularProducts.map(item=>(
      <Product item = {item} key={item.id} />
      ))}
    </Container>
  )
};

export default Products;