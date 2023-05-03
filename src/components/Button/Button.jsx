import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;  
  box-sizing: border-box;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.titleColor};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};  
`;

const Button = ({ height, width, fontSize, title, borderColor, titleColor, backgroundColor, action }) => {
  return (
    <StyledButton height={height} width={width} fontSize={fontSize} titleColor={titleColor} borderColor={borderColor} backgroundColor={backgroundColor} onClick={action}>
      {title}
    </StyledButton>
  );
};

export default Button;
