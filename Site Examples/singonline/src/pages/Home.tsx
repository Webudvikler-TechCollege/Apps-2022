import { IonSearchbar, IonTitle } from '@ionic/react';
import { useState } from 'react';
import { Page } from '../components/App/Layout/Layout';
import SongList from '../components/App/Songs/SongList';

const Home: React.FC = () => {
  const [ keyword, setKeyword ] = useState<string>('')

  function handleInput(e:any): void {
    setKeyword(e.target.value);
  }

  return (
    <Page title="Singonline Home" description='Find den sang du gerne vil synge'>
      <IonTitle class="ion-padding-top">Find en sang</IonTitle>
      <IonSearchbar onIonInput={handleInput}></IonSearchbar>
      <SongList keyword={keyword} />
    </Page>
  );
};

export default Home;
