import { useStore } from "@nanostores/react";
import { brawlerRarity, getBrawlersStatus } from "../store/store";
import { useEffect, useState } from "react";
import { PUBLIC_POKEMON_KEY } from "../models/models";


const Home = (): JSX.Element => {
  const $searchType = useStore(brawlerRarity);
  const $getBrawlersStatus = useStore(getBrawlersStatus);
  const [brawlersList, setBrawlersList] = useState<Array<any>>([]);

  useEffect(() => {
    !brawlersList.length && getBrawlersList();
    return () => {
      setBrawlersList([]);
    }
  }, []);

  const getBrawlersList = async () => {
    try {
      getBrawlersStatus.set('PENDING');
      const response = await fetch(PUBLIC_POKEMON_KEY);
      const data = await response.json();
      getBrawlersStatus.set(data?.list?.length ? 'SUCCESS' : 'NO_DATA');
      data?.list?.length && setBrawlersList(data.list);
    } catch (error) {
      console.error('Error fetching brawlers:', error);
      getBrawlersStatus.set('ERROR');
      setBrawlersList([]);
    }
  };

  return (
    <div className="flex items-center"><p>{$searchType}</p></div>
  );
};
export default Home;