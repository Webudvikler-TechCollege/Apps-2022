import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAuth } from "../Auth/AuthProvider";
import LogoutButton from "../Auth/LogoutButton";

// Typescript interface
interface iPageProps {
  title: string;
  description: string;
  children: any;
}

const Page: React.FC<iPageProps> = ({ title, description, children }) => {
  const { loginData } = useAuth();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    document.title = title;
    const meta_desc = document.querySelector('meta[name="description"]');
    if (meta_desc) {
      meta_desc.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>SingOnline</IonTitle>
            {id && (
              <IonButtons slot="start">
                <IonBackButton default-href="/"></IonBackButton>
              </IonButtons>
            )}
            <IonButtons slot="end">
              <IonButton href="/"><IonIcon icon="home-outline" slot="icon-only"></IonIcon></IonButton>
              {loginData && <IonButton href="/add"><IonIcon icon="add-circle-outline" slot="icon-only"></IonIcon></IonButton>}
              {loginData && <LogoutButton />}
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <ContentWrapper>{children}</ContentWrapper>
      </IonPage>
    </>
  );
};

interface iContentElements {
  children: any;
}

const ContentWrapper = (props: iContentElements) => {
  return <IonContent>
            {props.children}
          </IonContent>;
};

export { Page, ContentWrapper };
