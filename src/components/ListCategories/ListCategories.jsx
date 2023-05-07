import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import SliderVideos from "../SliderVideos/SliderVideos";

const StyledListCategories = styled.div`
  z-index: 1;
  width: 100%;
  margin-top: -150px;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ContainerTags = styled.li`  
  width: 100%;
  display: flex;  

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const TagCategory = styled.p`
  height: 60px;
  display: flex;
  font-size: 20px;
  color: #f5f5f5;
  padding: 0px 10px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 50px;
  background-color: ${(props) => props.backgroundCcolor};

  @media (max-width: 768px) {
    height: 33px;
    font-size: 16px;
    margin: 0px 0px 0px 10px;
  }
`;

const TagDescription = styled.p`
  padding: 0px;
  height: 60px;
  display: flex;
  font-size: 18px;
  color: #f5f5f5;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 50px;

  @media (max-width: 768px) {
    height: 0px;
    font-size: 12px;
    margin: 0px 0px 0px 10px;
  }
`;

const ListCategories = ({ listCategories }) => { 
  return (
    <StyledListCategories>
      <List>
        {listCategories.map((category) =>
          category.listVideos.length == 0 ? "" : (
            <Fragment key={category.id}>
              <ContainerTags>
                <TagCategory backgroundCcolor={category.categoryColor}>
                  {category.categoryName} 
                </TagCategory>

                <TagDescription >
                  {category.categoryDescription} 
                </TagDescription>
              </ContainerTags> 
              
              <SliderVideos
                listVideos={category.listVideos}
                categoryColor={category.categoryColor}
              />
            </Fragment>
          )
        )}
      </List>
    </StyledListCategories>
  );
};

export default ListCategories;
