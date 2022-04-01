import { Page } from "../components/App/Layout/Layout";
import SongForm from "../components/App/Songs/SongForm";

const AddSong: React.FC = () => {
  return (
    <>
        <Page title="Tilføj sang" description="Tilføj en sang til arkivet">
          <SongForm />
        </Page>
    </>
  );
};
export default AddSong;
