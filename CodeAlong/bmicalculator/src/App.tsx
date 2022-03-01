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
} from "@ionic/react";
import { calculatorOutline, refreshCircleOutline } from "ionicons/icons";
import { useRef, useState } from "react";

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();

  // useRef hook lader os hente værdier direkte fra DOM elementer
  // Datatypen er i dette tilfælde bestemt af et Ionic Input element
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  /**
   * Function til at udregne BMI med
   */
  const calculateBmi = () => {
    // I typescript er vi nødt til at sikre vores værdier. 
    // I typescript kan man bruge en shorthand (?) til at null sikre at en værdi: 
    // const enteredHeight = (heightInputRef.current) ? heightInputRef.current.value : null;
    // kan skrives med shorthand som:
    // const enteredHeight = heightInputRef.current?.value;
    // Man kan også garantere at der kommer en værdi med !
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    // Return false hvis enteredHeight eller enteredWeight er falsk
    if(!enteredHeight || !enteredWeight) {
      return;
    }

    // JS parseInt Shorthand (+) foran værdier for at konvertere dem til tal
    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBmi(bmi);
  }

  const resetInput = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Højde:</IonLabel>
          <IonInput ref={heightInputRef}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Weight:</IonLabel>
          <IonInput ref={weightInputRef}></IonInput>
        </IonItem>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonButton onClick={calculateBmi}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Beregn
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={resetInput}>
                <IonIcon slot="start" icon={refreshCircleOutline}></IonIcon>
                Nulstil
              </IonButton>
            </IonCol>
          </IonRow>

          {calculatedBmi && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>{calculatedBmi}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  )
};

export default App;
