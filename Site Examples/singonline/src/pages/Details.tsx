import { IonContent } from "@ionic/react";
import { Page } from "../components/App/Layout/Layout";
import SongDetails from "../components/App/Songs/SongDetails";

const Details: React.FC = () => {
  const song = SongDetails();

  return (
    <>
      {song && (
        <Page title={song.title} description="Læs">
          <IonContent className="ion-padding">
              <h1>{song.title}</h1>
              <h3>{song.name}</h3>
              <pre>{song.content}</pre>
          </IonContent>
        </Page>
      )}
    </>
  );
};
export default Details;
