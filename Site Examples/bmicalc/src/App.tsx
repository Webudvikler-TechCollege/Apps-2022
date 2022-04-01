import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

import { calculatorOutline, refreshCircleOutline } from "ionicons/icons";
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
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>()
  const [ errorMessage, setErrorMessage ] = useState<string>('')

  const heightInputRef = useRef<HTMLIonInputElement>(null)
  const weightInputRef = useRef<HTMLIonInputElement>(null)

  const calculateBMI = () => {    
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if(!enteredHeight) {
      setErrorMessage("Du skal angive din højde");
      throw new Error("Du skal udfylde begge felter");
    }

    if(!enteredWeight) {
      setErrorMessage("Du skal angive din vægt");
      throw new Error("Du skal udfylde begge felter");
    } 

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBMI(bmi);
    setErrorMessage('')
  }
  
  const resetFields = () => {
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';
    setErrorMessage('')
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Beregn din BMI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Højde:</IonLabel>
          <IonInput type="number" ref={heightInputRef}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Vægt:</IonLabel>
          <IonInput type="number" ref={weightInputRef}></IonInput>
        </IonItem>
        {errorMessage && 
          <IonItem color="danger">
            {errorMessage}
          </IonItem>
        }
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Beregn BMI
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={resetFields}>
                <IonIcon slot="start" icon={refreshCircleOutline}></IonIcon>
                Nulstil felter
              </IonButton>
            </IonCol>
          </IonRow>
          {calculatedBMI && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>BMI: {calculatedBMI}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
