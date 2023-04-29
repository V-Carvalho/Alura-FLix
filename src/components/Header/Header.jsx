import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  top: 0;
  z-index: 2;
  width: 100%;
  height: 94px;
  display: flex;
  padding: 0 50px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #2A7AE4;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.img`
  height: 40px;
  width: 170px;
`;

// TODO: Retornar p/ home ao clicar
const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Logo SEGEL FLIX" />  
      </Link>

      <Link to="/newvideo">
        <Button title="Novo vídeo" titleColor="#f5f5f5" backgroundColor="#000000" action={() => {}} />
      </Link>     
    </StyledHeader>
  );
};

export default Header;
