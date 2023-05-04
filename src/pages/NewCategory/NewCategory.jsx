import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "../../components/Form/FormNewCategory";
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection, updateDoc, addDoc, doc, deleteDoc  } from "firebase/firestore";

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
  justify-content: center;
`;

const ContainerForm = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewCategory = () => {

  const [listCategories, setListCategories] = useState([]);

  const getListCategories = () => {
    onSnapshot(collection(db, "segel-flix"), (categories) => {
      const data = categories.docs.map((category) => ({
        id: category.id,
        categoryName: category.data().categoryName,
        categoryDescription: category.data().categoryDescription,
        categoryColor: category.data().categoryColor,       
      }));    

      setListCategories(data);
    });
  };

  useEffect(() => {
    getListCategories();
  }, []);

  const createNewCategory = async (categoryName, categoryDescription, categoryColor) => {
    await addDoc(collection(db, "segel-flix"), {
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      categoryColor: categoryColor,
      listVideos: [],
    });
  };

  const updateCategoryData = (categoryId, categoryName, categoryDescription, categoryColor) => {
    updateDoc(doc(db, "segel-flix", categoryId), { 
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      categoryColor: categoryColor,
    });
  }

  const deleteCategory = async (categoryId) => {
    await deleteDoc(doc(db, "segel-flix", categoryId)); 
  }

  return (
    <Main>
      <ContainerForm>
        <Form
          deleteCategory={deleteCategory}
          listCategories={listCategories}
          formReturn={(value) => {
            if (!value.categoryId) {
              createNewCategory(value.categoryName, value.categoryDescription, value.categoryColor)   
            } else {
              updateCategoryData(value.categoryId, value.categoryName, value.categoryDescription, value.categoryColor) 
            }         
          }}
        />       
      </ContainerForm>      
    </Main>
  );
};

export default NewCategory;
