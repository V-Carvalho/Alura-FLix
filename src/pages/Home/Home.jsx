import styled from "styled-components";
import Banner from "../../components/Banner/Banner"
import ListCategories from "../../components/ListCategories/ListCategories"

const Main = styled.main`
  flex: 1;
  display: flex;
  margin-top: 94px;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContainerBanner = styled.section`
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const ContainerListCategories = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Main>
      <ContainerBanner>
        <Banner/>
      </ContainerBanner>


      <ContainerListCategories>
        <ListCategories />
      </ContainerListCategories>
    </Main>
  );
};

export default Home;
