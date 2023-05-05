import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "../../components/Form/Form";
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection, updateDoc, getDocs, doc } from "firebase/firestore";
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

const NewVideo = () => {
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
      }));

      data.unshift({ id: "", categoryName: "" });
      setListCategories(data);
    });
  };

  useEffect(() => {
    getListCategories();
  }, []);

  const createNewVideo = async (title, urlVideo, category, description) => {
    const snapshot = await getDocs(collection(db, "segel-flix"));
    snapshot.forEach((document) => {
      if (category === document.data().categoryName) {
        const newListVideos = [];

        document.data().listVideos.forEach((video) => {
          newListVideos.unshift({
            urlVideo: video.urlVideo,
          });
        });

        newListVideos.unshift({ urlVideo: urlVideo });

        updateDoc(doc(db, "segel-flix", document.id), {
          listVideos: newListVideos,
        })
        .then(() => {
          succesAlert("Vídeo criado com sucesso!");          
        })
        .catch((error) => {
          alertError("Erro ao criar vídeo!");
        });
      }
    });
  };

  const succesAlert = (message) => {
    setMessageAlert(message);
    setMessageColor("#E5E5E5");
    setAlertBackgroundColor("#69953B");
    setAlertDisplay("flex");
  }

  const alertError = (message) => {
    setMessageAlert(message);
    setMessageColor("#E5E5E5");
    setAlertBackgroundColor("#E53935");
    setAlertDisplay("flex");
  }

  const closeAlert = () => {
    setAlertDisplay("none");
  };

  return (
    <Main>
      <ContainerForm>
        <Form
          optionsDropdownList={listCategories}
          formReturn={(value) => {
            createNewVideo(
              value.title,
              value.urlVideo,
              value.category,
              value.description
            );
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

export default NewVideo;
