import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import SliderVideos from "../SliderVideos/SliderVideos";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const StyledListCategories = styled.div`
  z-index: 1;
  width: 100%;
  margin-top: -150px;
`;

const List = styled.ul`
  list-style: none;
`;

const ContainerTags = styled.li`
  width: 100%;
  display: flex;
`;

const TagCategory = styled.p`
  height: 60px;
  display: flex;
  font-size: 1.5vw;
  color: #f5f5f5;
  padding: 0px 10px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 50px;
  background-color: ${(props) => props.backgroundCcolor};
`;

const TagDescription = styled.p`
  height: 60px;
  display: flex;
  font-size: 1.3vw;
  color: #f5f5f5;
  padding: 0px 10px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const ListCategories = () => {
  const [categoryData, setCategoryData] = useState([]);

  const getAllCategories = () => {
    onSnapshot(collection(db, "segel-flix"), (categories) => {
      const data = categories.docs.map((category) => ({
        data: category.data(),
        id: category.id,
      }));
      setCategoryData(data);
    });
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <StyledListCategories>
      <List>
        {categoryData.map((category) =>
          category.data.listVideos.length == 0 ? "" : (
            <Fragment key={category.data.id}>
              <ContainerTags>
                <TagCategory backgroundCcolor={category.data.categoryColor}>
                  {category.data.categoryName} 
                </TagCategory>

                <TagDescription >
                  {category.data.categoryDescription} 
                </TagDescription>
              </ContainerTags> 
              
              <SliderVideos
                listVideos={category.data.listVideos}
                categoryColor={category.data.categoryColor}
              />
            </Fragment>
          )
        )}
      </List>
    </StyledListCategories>
  );
};

export default ListCategories;
