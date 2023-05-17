
import { atom } from "nanostores";
import type { BrawlersRarityType } from "../models/models";

const brawlerRarity = atom<BrawlersRarityType>('all');

export {
    brawlerRarity
};