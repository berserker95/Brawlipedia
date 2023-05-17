import { useStore } from "@nanostores/react";
import { brawlerRarity } from "../store/store";


const Home = (): JSX.Element => {
  const $searchType = useStore(brawlerRarity);
    return(
        <div className="flex items-center"><p>{$searchType}</p></div>
    );
};
export default Home;