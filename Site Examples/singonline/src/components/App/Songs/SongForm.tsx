import { IonButton, IonInput, IonTextarea, IonTitle } from "@ionic/react";
import { IonItem, IonLabel, IonList } from "@ionic/react";
import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../Auth/AuthProvider";

const SongForm: React.FC = () => {
  const { loginData } = useAuth();

  const titleInputRef = useRef<HTMLIonInputElement>(null);
  const artistInputRef = useRef<HTMLIonInputElement>(null);
  const contentInputRef = useRef<HTMLIonTextareaElement>(null);

  const handleSubmit = async () => {
    if (
      titleInputRef.current!.value &&
      artistInputRef.current!.value &&
      contentInputRef.current!.value
    ) {
      const formData:any = new FormData();
      formData.append('title', titleInputRef.current!.value.toString())
      formData.append('artist', artistInputRef.current!.value.toString())
      formData.append('content', contentInputRef.current!.value)

      const options = {
        body: formData,
        headers: {
          Authorization: `Bearer ${loginData.access_token}`
        }
      };

      const url = 'https://api.mediehuset.net/singonline/songs';
      const result = await axios.post(url, options);
    }
  };

  return (
    <>
    <IonList>
      <IonItem>
        <IonLabel position="floating">Titel</IonLabel>
        <IonInput inputmode="text" required ref={titleInputRef} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Artist Name:</IonLabel>
        <IonInput inputmode="text" required ref={artistInputRef} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Content:</IonLabel>
        <IonTextarea inputmode="text" required ref={contentInputRef} />
      </IonItem>
      <IonItem lines="none">
        <IonButton color="primary" size="default" strong onClick={handleSubmit}>
          Gem
        </IonButton>
        <IonButton color="danger" size="default" type="reset">
          Nulstil
        </IonButton>
      </IonItem>
    </IonList>
    </>
  );
};

export default SongForm;
