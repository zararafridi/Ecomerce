import "./Navbar.css"
import {Link} from 'react-router-dom'
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import {mobile} from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({height : "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  ${mobile({padding : "20px 0px"})}

  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  ${mobile({width : "50px"})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize : "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent : "center",flex:"2"})}
  
`;
const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left:25px ;
  ${mobile({fontSize : "12px",marginLeft: "10px"})}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon style={{color:"gray", fontSize:16}}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ZARAR</Logo>
        </Center>
        <Right>
        <Link to="/register" ><MenuItem>Register</MenuItem></Link>
          <Link to="/login" > <MenuItem>Sign in</MenuItem></Link>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
