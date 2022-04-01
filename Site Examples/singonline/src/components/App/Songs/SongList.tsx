import { IonItem, IonList } from "@ionic/react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../Auth/AuthProvider";

// Interface for props
interface iProps {
  keyword: string
}

// Interface til array objects
interface iSongList {
    id: number;
    title: string;
    content: string;
    name: string;
    slug: string;
    created: Date;
}

// Destructure assignment in prop call!!
const SongList: React.FC<iProps> = ({keyword}) => {
  // Call logindata as a hook
  const { loginData } = useAuth();
  // Call apidata with iSongList Array
  const [ apiData, setApiData ] = useState<iSongList[]>();

  useEffect(() => {
    // Fetch function
    const getData = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`
        },
      };
      
      const url = "https://api.mediehuset.net/singonline/songs";
      const result = await axios.get(url, options);
      setApiData(result.data.items);
    };
    getData();
  }, [loginData.access_token, setApiData]);

  // Data filter function
  const data = useMemo(() => {
    if(!apiData) {
      return (
        []
      )  
    }
    if(keyword) {
      // Filtrering ud fra søgeresultat
      return apiData.filter(elm => 
        elm.title.toLowerCase().includes(keyword.toLowerCase()) || 
        elm.name.toLowerCase().includes(keyword.toLowerCase())
      )
    } else {
      // Random sortering og slice
      return apiData.sort(function (a, b) {return 0.5 - Math.random ()}).slice(0,10);
    }
  }, [apiData, keyword])

  return (
    <IonList>
      {data.map((item) => {
          return (
            <IonItem key={item.id} href={`/${item.slug}`}>{item.title} - {item.name}</IonItem>
          );
        })}
    </IonList>
  );
};

export default SongList;
