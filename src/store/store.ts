
import { atom } from "nanostores";
import type { BrawlersRarityType, ServiceStatusType } from "../models/models";

const brawlerRarity = atom<BrawlersRarityType[]>(['all']);
const getBrawlersStatus = atom<ServiceStatusType>('NO_DATA');


export {
    brawlerRarity,
    getBrawlersStatus
};