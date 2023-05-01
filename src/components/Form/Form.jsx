import { useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import DropdownList from "../DropdownList/DropdownList.jsx";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";


const TitleForm = styled.h2`
  display: flex;
  font-size: 60px;
  font-weight: 400;
  color: #f5f5f5;
  padding: 40px 0px;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  margin: 0px 40px;
  flex-direction: column;
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
            title="Salvar"
            backgroundColor="#2A7AE4"            
          />
          <Button
            title="Limpar"
            backgroundColor="#9E9E9E"
            action={(event) => {
              event.preventDefault();
              clearForm();
            }} 
          />
        </ContainerButtonSaveClear>
        
        <Button
         title="Nova Categoria"
         backgroundColor="#2A7AE4"
         action={(event) => {
          event.preventDefault();
          // TODO: Criar tela --> Nova Categoria
          console.log('Vai pra tela --> Nova Categoria')
        }}  
        />
      </ContainerButtonsForm>
    </StyledForm>
  );
};

export default Form;
