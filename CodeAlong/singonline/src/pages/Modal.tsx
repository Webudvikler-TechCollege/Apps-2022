import { IonButton, IonContent, IonModal, IonPage } from "@ionic/react";
import { useState } from "react";
import { Page } from "../components/Layout/Layout";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);



  return (
    <Page title="Velkommen til SingOnline" description="Vælg eller søg efter en sang">
      <IonModal
        isOpen={showModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowModal(false)}
      ><p>This is modal content</p>
      </IonModal>
	  <IonButton onClick={e => setShowModal(true)}>Vis</IonButton>
    </Page>
  );
};

export default Modal;
