import styled from "styled-components";

const Main = styled.main`
  display: flex;
  margin-top: 94px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  
  background-color: red;
`;

const ContainerNewVideo = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;
  background-color: pink;
`;

const NewVideo = () => {
  return (
    <Main>
      <ContainerNewVideo>
        NewNewVideo
      </ContainerNewVideo>
    </Main>
  );
};

export default NewVideo;
