import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { useRef, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";

export const LoginForm: React.FC = () => {
  const { loginData, setLoginData } = useAuth();
  const usernameRef = useRef<HTMLIonInputElement>(null)
  const passwordRef = useRef<HTMLIonInputElement>(null)

  const handleLogin = async () => {    
    let formData: any = new FormData();
    formData.append("username", usernameRef.current!.value);
    formData.append("password", passwordRef.current!.value);
    let url = "https://api.mediehuset.net/token";
    let result = await axios.post(url, formData);
    handleSessionData(result.data);
  };

  const handleSessionData = (res: any) => {
    if (!res.message) {
      setLoginData(res);
      sessionStorage.setItem("token", JSON.stringify(res));
    }
  };

  return (
    <>
      {!loginData ? (
        <>
          <IonList>
            <IonItem>
              <IonLabel>Brugernavn:</IonLabel>
              <IonInput ref={usernameRef}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password:</IonLabel>
              <IonInput type="password" ref={passwordRef}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonButton onClick={handleLogin}>Send</IonButton>
            </IonItem>
          </IonList>
        </>
      ) : null}
    </>
  );
};
