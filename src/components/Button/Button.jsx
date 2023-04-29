import styled from "styled-components";

const StyledButton = styled.button`
  height: 50px;
  width: 180px;  
  cursor: pointer;
  font-size: 20px;
  text-align: center;  
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #F5F5F5;
  color: ${(props) => props.titleColor};
  background-color: ${(props) => props.backgroundColor};  
`;

const Button = ({ title, titleColor, backgroundColor, action }) => {
  return (
    <StyledButton titleColor={titleColor} backgroundColor={backgroundColor} onClick={action}>
      {title}
    </StyledButton>
  );
};

export default Button;
