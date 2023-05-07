import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

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
  background: rgba(0, 0, 0, 1);
  border-bottom: 2px solid #2a7ae4;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 0px;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: 170px;

  @media (max-width: 768px) {
    width: 120px;
    height: 28px;   
  } 
`;

const ContainerButton = styled.div`
  @media (max-width: 768px) {
    left: 0;
    bottom: 0;
    width: 100%;    
    position: fixed;

    & :nth-child(1) {
      width: 100%;
      height: 54px;
      border: none;
      color: #FFFFFF;
      background-color: #2A7AE4;  
    }
  } 
`;

const Header = () => {
  const pageLocation = useLocation();

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Logo SEGEL FLIX" />
      </Link>

      {pageLocation.pathname === "/" ? (
        <Link to="/newvideo">
          <ContainerButton>
            <Button
              height="50px"
              width="180px"
              fontSize="20px"
              title="Novo vídeo"
              titleColor="#f5f5f5"
              borderColor="#f5f5f5"
              backgroundColor="#000000"
            />
          </ContainerButton>
        </Link>
      ) : (
        ""
      )}
    </StyledHeader>
  );
};

export default Header;
