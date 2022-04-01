import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../Auth/AuthProvider";

const SongDetails = () => {
  interface iSong {
    id: number;
    title: string;
    content: string;
    name: string;
    slug: string;
  }

  const { loginData } = useAuth();
  const [ apiData, setApiData ] = useState<iSong>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        headers: {
          Authorization: `Baerer ${loginData.access_token}`,
        },
      };
      const url = `https://api.mediehuset.net/singonline/songs/${id}`;
      const result = await axios.get(url, options);
      setApiData(result.data.item);
    };
	getData()
  }, [id, loginData.access_token]);

  return apiData ? apiData : null;
};

export default SongDetails;
