import { IonCard } from "@ionic/react";
import { LoginForm } from "../components/App/Auth/LoginForm";
import { Page } from "../components/App/Layout/Layout";

export const Login:React.FC = () => {
    return (
        <Page title="Login" description="Log ind og få adgang til vores sange">
            <IonCard>
                <LoginForm />
            </IonCard>
        </Page>
    )
}