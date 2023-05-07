import { useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import Table from "../Table/Table"

const TitleForm = styled.h2`
  display: flex;
  font-size: 60px;
  font-weight: 400;
  color: #f5f5f5;
  padding: 40px 0px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 35px;    
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  margin: 0px 40px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0px 10px;    
  }
`;

const ContainerButtonsForm = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: row;
`;

const ContainerButtonSaveClear = styled.div`
  flex: 1;
  gap: 40px;
  display: flex;
  flex-direction: row;  

  @media (max-width: 768px) {
    gap: 0px;
    justify-content: space-around;    
  }
`;

const ContainerTable = styled.div`
  @media (max-width: 768px) {
    display: none;    
  } 
`;

const Form = ({ deleteCategory, listCategories, formReturn }) => {
  const [categoryId, setCategoryId] = useState("")
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("#000000");
  const [categoryDescription, setCategoryDescription] = useState("");

  const sendData = (event) => {
    event.preventDefault();
    
    formReturn({
      categoryId: categoryId,
      categoryName: categoryName,
      categoryColor: categoryColor,
      categoryDescription: categoryDescription,
    });

    setCategoryId("");
    setCategoryName("");
    setCategoryColor("#000000");
    setCategoryDescription("");
  };

  const clearForm = () => {
    setCategoryId("");
    setCategoryName("");
    setCategoryColor("#000000");
    setCategoryDescription("");
  }

  return (
    <StyledForm onSubmit={sendData}>
      <TitleForm>Nova categoria</TitleForm>
      <Input
        type="text"
        label="Nome"
        value={categoryName}
        required={true}
        borderColor="#e5e5e5"
        inputReturn={(value) => setCategoryName(value)}
      />      
      <TextArea 
        label="Descrição"
        value={categoryDescription} 
        required={false}
        borderColor="#e5e5e5"
        textAreaReturn={(value) => setCategoryDescription(value)}
      />
      <Input
        type="color"
        label="Cor"
        value={categoryColor}
        required={true}
        borderColor="#e5e5e5"
        inputReturn={(value) => setCategoryColor(value)}
      /> 
      <ContainerButtonsForm>
        <ContainerButtonSaveClear>
          <Button
            height="50px"
            width="180px"
            fontSize="20px" 
            title="Salvar"
            titleColor="#FFFFFF"
            borderColor="transparent"
            backgroundColor="#2A7AE4"                       
          />
          <Button
            height="50px"
            width="180px"
            fontSize="20px"
            title="Limpar"
            titleColor="#000000"
            backgroundColor="#9E9E9E"
            action={(event) => {
              event.preventDefault();
              clearForm();
            }} 
          />
        </ContainerButtonSaveClear>
      </ContainerButtonsForm>
      <ContainerTable>
        <Table
          deleteCategory={deleteCategory} 
          listCategories={listCategories}
          tableReturn={(value) => {          
            setCategoryId(value.categoryId)
            setCategoryName(value.categoryName)
            setCategoryDescription(value.categoryDescription)
            setCategoryColor(value.categoryColor)          
          }}      
        />
      </ContainerTable>      
    </StyledForm>
  );
};

export default Form;
