import { IonButton, IonIcon } from "@ionic/react";
import { useAuth } from "./AuthProvider";

const LogoutButton: React.FC = (props: any) => {
  const { setLoginData } = useAuth();

  const handleLogout = () => {
    setLoginData("");
    sessionStorage.removeItem("token");
  };

  return (
    <IonButton onClick={handleLogout}>
      <IonIcon icon="log-out-outline" slot="icon-only" title="logout"></IonIcon>
    </IonButton>
  );
};

export default LogoutButton;
