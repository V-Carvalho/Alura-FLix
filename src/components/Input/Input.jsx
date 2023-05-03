import { useState } from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  background-color: #53585d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const LabelInput = styled.label`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  color: #e5e5e5;
  padding: 10px 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  font-size: 14px;
  color: #e5e5e5;
  border-top: none;
  border-left: none;
  font-weight: bold;
  border-right: none;
  box-sizing: border-box;
  caret-color: #e5e5e5;
  background-color: #53585d;
  border-bottom: 2px solid ${(props) => props.borderColor};   
`;

const Input = ({ label, borderColor, value, required, type, inputReturn }) => {

  const [borderBotomColor, setBorderBotomColor] = useState(borderColor);

  return (
    <ContainerInput>
      <LabelInput>{label}</LabelInput>
      <StyledInput
        type={type}
        value={value}
        required={required}
        borderColor={borderBotomColor}
        onFocus={() => {
          if (!value) {
            setBorderBotomColor("#C62828");
          }
        }}
        onBlur={() => {
          if (!value) {
            setBorderBotomColor("#C62828");
          }
        }}
        onChange={(event) =>  {
          inputReturn(event.target.value)
          if (!event.target.value) {
            setBorderBotomColor("#C62828");
          } else {
            setBorderBotomColor("#2A7AE4");
          }
         }}
      />
    </ContainerInput>
  );
};

export default Input;
