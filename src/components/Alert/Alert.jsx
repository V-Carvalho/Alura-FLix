import { useState } from "react";
import styled from "styled-components";

const StyledAlert = styled.div`
  left: 0;
  bottom: 0;
  opacity: 0;
  height: 50px;
  opacity: 0.9;
  position: fixed;
  font-size: larger;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 20px 40px;
  display: ${(props) => props.display};
  color: ${(props) => props.messageColor};
  transition: opacity 0.6s, transform 500ms;
  background-color: ${(props) => props.backgroundColor};
`;

const MessageAlert = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px 20px 15px 20px;
`;

const ButtonCloseAlert = styled.span`
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: flex-start;
  padding: 0px 8px 0px 0px;
  &:active {
    transform: translateY(2px);
  }
`;

const Alert = ({ message , messageColor, backgroundColor, display, action }) => {
  return (
    <StyledAlert messageColor={messageColor} backgroundColor={backgroundColor} display={display}>
      <MessageAlert>{message}</MessageAlert>
      <ButtonCloseAlert onClick={action}>{"x"}</ButtonCloseAlert>
    </StyledAlert>
  );
};

export default Alert;
