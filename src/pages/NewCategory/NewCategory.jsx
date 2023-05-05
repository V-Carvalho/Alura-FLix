import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "../../components/Form/FormNewCategory";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  onSnapshot,
  collection,
  updateDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import Alert from "../../components/Alert/Alert";

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
  const [messageAlert, setMessageAlert] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [alertBackgroundColor, setAlertBackgroundColor] = useState("");
  const [alertDisplay, setAlertDisplay] = useState("none");

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

  const createNewCategory = async ( categoryName, categoryDescription, categoryColor ) => {
    await addDoc(collection(db, "segel-flix"), {
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      categoryColor: categoryColor,
      listVideos: [],
    })
    .then(() => {
      succesAlert("Categoria adicionada com sucesso!");
    })
    .catch((error) => {
      alertError("Erro ao adicionar categoria!");
    });
  };

  const updateCategoryData = ( categoryId, categoryName, categoryDescription, categoryColor ) => {
    updateDoc(doc(db, "segel-flix", categoryId), {
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      categoryColor: categoryColor,
    })
    .then(() => {
      succesAlert("Dados atualizados com sucesso!");
    })
    .catch((error) => {
      alertError("Erro ao atualizar dados!");
    });
  };

  const deleteCategory = async (categoryId) => {
    await deleteDoc(doc(db, "segel-flix", categoryId))
    .then(() => {
      succesAlert("Categoria removida com sucesso!");
    })
    .catch((error) => {
      alertError("Erro ao remover categoria!");
    });
  };

  const succesAlert = (message) => {
    setMessageAlert(message);
    setMessageColor("#E5E5E5");
    setAlertBackgroundColor("#69953B");
    setAlertDisplay("flex");
  };

  const alertError = (message) => {
    setMessageAlert(message);
    setMessageColor("#E5E5E5");
    setAlertBackgroundColor("#E53935");
    setAlertDisplay("flex");
  };

  const closeAlert = () => {
    setAlertDisplay("none");
  };

  return (
    <Main>
      <ContainerForm>
        <Form
          deleteCategory={deleteCategory}
          listCategories={listCategories}
          formReturn={(value) => {
            if (!value.categoryId) {
              createNewCategory(
                value.categoryName,
                value.categoryDescription,
                value.categoryColor
              );
            } else {
              updateCategoryData(
                value.categoryId,
                value.categoryName,
                value.categoryDescription,
                value.categoryColor
              );
            }
          }}
        />
      </ContainerForm>
      <Alert
        message={messageAlert}
        messageColor={messageColor}
        backgroundColor={alertBackgroundColor}
        display={alertDisplay}
        action={closeAlert}
      />
    </Main>
  );
};

export default NewCategory;
