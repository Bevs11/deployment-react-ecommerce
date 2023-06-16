import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/pink-soap.png';

const Container = styled.div`
    margin: 20px 0;
    background-color: rgb(250,230,230);
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
flex: 1;
`;
const Center = styled.div`
font-weight: bold;
font-size: 30px;
flex: 1;
text-align: center;
`;
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 25px; 
flex: 1;
`;
const NavigationItem = styled.div`
cursor: pointer;
font-size: 14px;
margin-left: 25px
`;
const LogoContainer = styled.div`
width: 60px;
height: 100%;
border-radius 50%;
background-color: yellow;
display: flex;
justify-content: center;
align-items: center;
`;
const Logo = styled.img`
width: 90%;
height: 90%;
`;

    //Component for header containing name, logo and links
const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <LogoContainer>
                    <Logo src={image}/>
                </LogoContainer>
            </Left>
            <Center>SOAP BOULANGERIE</Center>
            <Right>
                <NavigationItem>
                    <Link to='/'>Home</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to='/products'>Products</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to='/cart'>Cart/Checkout</Link>
                </NavigationItem>
            </Right>
        </Wrapper>
    </Container>
  )
};

export default NavBar;