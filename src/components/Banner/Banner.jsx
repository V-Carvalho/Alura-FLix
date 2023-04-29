import styled from "styled-components";
import bannerCover from "../../assets/images/banner_cover.jpg";
import VideoCard from "../VideoCard/VideoCard";

const StyledBanner = styled.div`
  z-index: 0;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  background-size: 100% 115%;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-around;
  border-bottom: 2px solid #2a7ae4;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${bannerCover});
`;

const ContainerTextMonitoring = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 130px 0px 0px 0px;
  justify-content: flex-start;
`;

const Title = styled.h1`
  height: 60px;
  display: flex;
  font-size: 2.0vw;
  font-weight: 400;
  color: #f5f5f5;
  padding: 0px 10px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  margin: 0px 0px 30px 50px;
  background-color: #6bd1ff;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.3);    
`;

const Subtitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 400;
  color: #f5f5f5;
  border-radius: 4px;
  margin: 0px 0px 8px 50px;  
`;

const Message = styled.p`
  font-size: 1.2vw;
  font-weight: 300;
  color: #f5f5f5;
  border-radius: 4px;
  margin: 0px 0px 0px 50px;
`;

const ContainerVideoMonitoring = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 130px 50px 0px 0px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <ContainerTextMonitoring>
        <Title>Segurança Eletrônica</Title>

        <Subtitle>Monitoramento</Subtitle>

        <Message>
          Conheceça mais sobre essa área que só cresce. Aqui vamos apresentar um
          conjunto de tecnologias e dispositivos eletrônicos que visam garantir
          a segurança de pessoas e patrimônio por meio de monitoramento,
          controle e prevenção de ameaças. Isso inclui sistemas de alarme,
          câmeras de vigilância, controle de acesso, entre outros.
        </Message>
      </ContainerTextMonitoring>

      <ContainerVideoMonitoring>
        <VideoCard
          width={"75%"}
          height={"333px"}
          borderColor={"#6BD1FF"}
          urlVideo={
            "https://www.youtube.com/watch?v=P6F0P9UBmBc&ab_channel=BeOn"
          }
        />
      </ContainerVideoMonitoring>
    </StyledBanner>
  );
};

export default Banner;
