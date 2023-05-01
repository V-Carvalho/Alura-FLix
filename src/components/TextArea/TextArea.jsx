import { useState } from "react";
import styled from "styled-components";

const ContainerTextArea = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  background-color: #53585d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const LabelTextArea = styled.label`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  color: #e5e5e5;
  padding: 10px 5px;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;
  height: 150px;
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

const TextArea = ({ label, borderColor, value, required, textAreaReturn }) => {

  const [borderBotomColor, setBorderBotomColor] = useState(borderColor);

  return (
    <ContainerTextArea>
      <LabelTextArea>{label}</LabelTextArea>
      <StyledTextArea
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
        onChange={(event) => {
          textAreaReturn(event.target.value);
          if (!event.target.value) {
            setBorderBotomColor("#C62828");
          } else {
            setBorderBotomColor("#2A7AE4");
          }
        }}
      />
    </ContainerTextArea>
  );
};

export default TextArea;
