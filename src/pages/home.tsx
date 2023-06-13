import { useStore } from "@nanostores/react";
import { brawlerRarity, getBrawlersStatus } from "../store/store";
import { useEffect, useState } from "react";
import { BrawlersRarityType, PUBLIC_POKEMON_KEY } from "../models/models";
import { capitalizedArray } from "../utils/utils";
import CardsContainer from "../components/cards-container/CardsContainer";

const initialState = {
  oldList: [],
  updatedList: []
};

const Home = (): JSX.Element => {
  const $searchType = useStore(brawlerRarity);
  const $getBrawlersStatus = useStore(getBrawlersStatus);
  const [brawlersList, setBrawlersList] = useState<Record<'oldList' | 'updatedList', any[]>>(initialState);

  useEffect(() => {
    if(!brawlersList.oldList.length) {
      getBrawlersList();
    }
    return () => {
      setBrawlersList(initialState);
    }
  }, []);

  useEffect(() => {
    brawlersList.oldList.length && getFilteredBrawlersList($searchType);
  }, [$searchType, brawlersList.oldList]);
  

  const getBrawlersList = async () => {
    try {
      getBrawlersStatus.set('PENDING');
      const response = await fetch(PUBLIC_POKEMON_KEY);
      const data = await response.json();
      getBrawlersStatus.set(data?.list?.length ? 'SUCCESS' : 'NO_DATA');
      data?.list?.length && setBrawlersList({oldList: data.list, updatedList: data.list});
    } catch (error) {
      console.error('Error fetching brawlers:', error);
      getBrawlersStatus.set('ERROR');
      setBrawlersList(initialState);
    }
  };

  const getFilteredBrawlersList = (searchType: BrawlersRarityType[]) => {
    const capitalizedSearchType = capitalizedArray(searchType);
    let oldBrawlersListClone = [...brawlersList.oldList];
    let temp = [];
    if(!capitalizedSearchType.includes('All')) {
      temp = oldBrawlersListClone.filter(e => capitalizedSearchType.includes(e.rarity.name));
      console.log(brawlersList.oldList);
      console.log(temp);
      return setBrawlersList({...brawlersList, updatedList: temp});
    }
    return setBrawlersList({...brawlersList, updatedList: brawlersList.oldList});
  }

  return (
    <div className="flex items-center justify-center">{$getBrawlersStatus === 'SUCCESS' && <CardsContainer brawlersList={brawlersList.updatedList}/>}</div>
  );
};
export default Home;