import styled from "styled-components"
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection : "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: large;
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display : "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

function Footer() {
  return (
    <Container>
        <Left>
        <Logo>ZARAR</Logo>
            <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don,t look even slightly believable.
            </Description>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="#E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <RoomIcon/> Kohat, Pakistan
            </ContactItem>
            <ContactItem>
               <PhoneIcon/> 03359625146
            </ContactItem>
            <ContactItem>
               <MailOutlineIcon/> zararafridi@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer