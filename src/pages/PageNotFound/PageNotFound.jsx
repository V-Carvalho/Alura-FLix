import styled from "styled-components";
import imgErrorMessag from "../../assets/images/page_not_found.png";

const Main = styled.main`
  display: flex;
  margin-top: 94px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ImgErrorMessag = styled.img`
  max-width: 100%;
`;

const PageNotFound = () => {
  return (
    <Main>
      <ImgErrorMessag src={imgErrorMessag} alt="Página não encontrada" />
    </Main>
  );
};

export default PageNotFound;
