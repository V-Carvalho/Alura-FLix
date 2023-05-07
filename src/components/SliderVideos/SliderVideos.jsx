import styled from "styled-components";
import Card from "../VideoCard/VideoCard";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useRef } from 'react';

const ContainerSlider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = styled.ul`  
  gap: 20px;
  width: 100%;
  height: 275px;
  display: flex;
  cursor: pointer;
  list-style: none;
  overflow-x: auto;
  margin: 20px 0px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    height: 180px;
    margin: 20px 10px;    
    overflow-y: hidden;
  }

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 0 0 3px #999999;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.background};
  }
`;

const IconScroolSlider = styled.div`
  flex: 0;
  display: flex;
  cursor: pointer;
  margin: 0px 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;    
  }

  &:hover {
    transform: scale(1.5);
  }

  &:active {
    transform: translateY(4px);    
  }
`;

const SliderVideos = ({ listVideos, categoryColor }) => {
  
  const refSlider = useRef(null);

  const scroolLeftSlider = () => {
    refSlider.current.scrollLeft -= 200;
  };

  const scroolRightSlider = () => {
    refSlider.current.scrollLeft += 200;
  };  

  return (
    <ContainerSlider>
      <IconScroolSlider>
        <MdArrowBackIos
          size={20}
          color={categoryColor} 
          onClick={scroolLeftSlider}          
        />
      </IconScroolSlider>

      <Slider background={categoryColor} ref={refSlider}>
        {listVideos.map((video) => (
          <Card
            key={video.urlVideo}
            width={"430px"}
            height={"260px"}
            urlVideo={video.urlVideo}
            borderColor={categoryColor}
          />
        ))}
      </Slider>

      <IconScroolSlider>
        <MdArrowForwardIos
          size={20}
          color={categoryColor}
          onClick={scroolRightSlider}
        />
      </IconScroolSlider>
    </ContainerSlider>
  );
};

export default SliderVideos;
