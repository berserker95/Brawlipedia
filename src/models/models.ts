export const BrawlersRarity = ['all', 'common', 'rare', 'superRare', 'epic', 'mythic', 'legendary', 'chromatic'] as const;

type BrawlerRarity = typeof BrawlersRarity[number];
export type BrawlersRarityType = BrawlerRarity;

export type RarityObject = {
    [key in typeof BrawlersRarity[number]]: {
      label: string;
      value: boolean;
    };
  };