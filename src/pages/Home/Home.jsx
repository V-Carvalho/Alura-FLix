import { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner"
import ListCategories from "../../components/ListCategories/ListCategories"
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

const Main = styled.main`
  display: flex;
  margin-top: 94px;
  min-height: 100vh;
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
  const [listCategories, setListCategories] = useState([]);

  const getAllCategories = () => {
    onSnapshot(collection(db, "segel-flix"), (categories) => {
      const data = categories.docs.map((category) => ({
        id: category.id,
        categoryName: category.data().categoryName,
        categoryDescription: category.data().categoryDescription,
        categoryColor: category.data().categoryColor, 
        listVideos: category.data().listVideos
      }));
      setListCategories(data);
    });
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Main>
      <ContainerBanner>
        <Banner/>
      </ContainerBanner>

      <ContainerListCategories>
        <ListCategories listCategories={listCategories}  />
      </ContainerListCategories>
    </Main>
  );
};

export default Home;
