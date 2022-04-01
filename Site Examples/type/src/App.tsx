import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useRef, useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [ firstName, setFirstName ] = useState<string>()
  const [ zipCode, setZipCode ] = useState<number>(0)

  setFirstName('10')
  setZipCode(9000)

  const inputName = useRef<HTMLIonInputElement>(null);

  const handleInput = (): void => {
    console.log(inputName.current!.value);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Types</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">Indtast navn:</IonLabel>
          <IonInput ref={inputName}></IonInput>
        </IonItem>
        <IonItem>
          <IonButton onClick={handleInput}>Send</IonButton>
        </IonItem>
      </IonContent>
    </IonApp>
  );
};

export default App;
