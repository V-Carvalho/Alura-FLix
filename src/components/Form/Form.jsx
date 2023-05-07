import { useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import DropdownList from "../DropdownList/DropdownList.jsx";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

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
  margin-bottom: 60px;
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

const ContainerButtonNewCategory = styled.div`
  @media (max-width: 768px) {
    display: none;    
  } 
`;

const Form = ({ optionsDropdownList, formReturn }) => {  
  const [title, setTitle] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [category, setCategory] = useState("");  
  const [description, setDescription] = useState("");

  const sendData = (event) => {
    event.preventDefault();

    formReturn({
      title: title,
      urlVideo: urlVideo,
      category: category,
      description: description,
    });

    setTitle("");
    setUrlVideo("");
    setCategory("");
    setDescription("");
  };

  const clearForm = () => {
    setTitle("");
    setUrlVideo("");
    setCategory("");
    setDescription("");
  }

  return (
    <StyledForm onSubmit={sendData}>
      <TitleForm>Novo vídeo</TitleForm>
      <Input
        type="text"
        label="Título"
        value={title}
        required={true}
        borderColor="#e5e5e5"
        inputReturn={(value) => setTitle(value)}
      />
      <Input
        type="url"
        label="Link do vídeo"
        value={urlVideo}
        required={true}
        borderColor="#e5e5e5"
        inputReturn={(value) => setUrlVideo(value)}
      />
      <DropdownList
        label="Escolha uma categoria"
        value={category}
        optionsDropdownList={optionsDropdownList}
        required={true}
        borderColor="#e5e5e5"
        DropdownListReturn={(value) => setCategory(value)}
      />
      <TextArea 
        label="Descrição"
        value={description} 
        required={false}
        borderColor="#e5e5e5"
        textAreaReturn={(value) => setDescription(value)}
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

        <Link to="/newcategory">
          <ContainerButtonNewCategory>
            <Button
              height="50px"
              width="180px"
              fontSize="20px" 
              title="Nova Categoria"
              titleColor="#FFFFFF"
              borderColor="transparent"
              backgroundColor="#2A7AE4"           
            />
          </ContainerButtonNewCategory>          
        </Link>
      </ContainerButtonsForm>
    </StyledForm>
  );
};

export default Form;
