import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "../../components/Form/Form";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, collection, updateDoc  } from "firebase/firestore";

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

const NewVideo = () => {

  // TODO: Pegar lista de categorias do firebase  
  const [listCategories, setListCategories] = useState([]);

  const getListCategories = () => {
    onSnapshot(collection(db, "segel-flix"), (categories) => {
      const data = categories.docs.map((category) => ({
        id: category.id,
        categoryName: category.data().categoryName,
      }));
      
      data.unshift({ id: "", categoryName: "" });
      setListCategories(data);
    });
  }

  useEffect(() => {
    getListCategories();
  }, []);

  // TODO: Criar logica p/ atualizar a lista de videos
  const createNewVideo = async (title, urlVideo, category, description) => {
    console.log(title) // "listVideos" tem q alutualizar o array inteiro no front depois atualiza no firestore
    await updateDoc(doc(db, "segel-flix", "ALBqqolLLJDsDPOLGBUU"),  { urlVideo: "Los Angeles", }, { merge: true });     
  }

  return (
    <Main>
      <ContainerForm>
        <Form
          optionsDropdownList={listCategories}
          formReturn={(value) => {
            createNewVideo(value.title, value.urlVideo, value.category, value.description);
          }}
        />
      </ContainerForm>
    </Main>
  );
};

export default NewVideo;
