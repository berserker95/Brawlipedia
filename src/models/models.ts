export const BrawlersRarity = ['all', 'common', 'rare', 'superRare', 'epic', 'mythic', 'legendary', 'chromatic'] as const;
export const ServiceStatus = ['PENDING', 'SUCCESS', 'ERROR', 'NO_DATA'] as const;
export const PUBLIC_POKEMON_KEY = 'https://api.brawlapi.com/v1/brawlers';

type  ServiceStatus = typeof ServiceStatus[number];
export type ServiceStatusType = ServiceStatus;

type BrawlerRarity = typeof BrawlersRarity[number];
export type BrawlersRarityType = BrawlerRarity;

export type RarityObject = {
    [key in typeof BrawlersRarity[number]]: boolean
  };

