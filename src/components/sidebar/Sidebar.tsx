import { useEffect, useId, useReducer, useState } from 'react';
import { capitalizeFirst } from '../../utils/utils';
import { BrawlersRarity, BrawlersRarityType, RarityObject } from '../../models/models';
import { brawlerRarity } from '../../store/store';

const initialState: RarityObject = {
    all: true,
    common: false,
    rare: false,
    superRare: false,
    epic: false,
    mythic: false,
    legendary: false,
    chromatic: false,
};

type Action =
    | { type: 'UPDATE_ALL'; checked: boolean }
    | { type: 'UPDATE_RARITY'; name: string; checked: boolean };

const rarityReducer = (state: RarityObject, action: Action): RarityObject => {
    switch (action.type) {
        case 'UPDATE_ALL':
            const updatedRarityChecked: RarityObject = { ...state, all: action.checked };
            Object.keys(updatedRarityChecked).forEach((checkboxName) => {
                if (checkboxName !== 'all') {
                    updatedRarityChecked[checkboxName as keyof RarityObject] = !action.checked;
                }
            });
            const trueKeys = Object.keys(updatedRarityChecked).filter(
                (key) => updatedRarityChecked[key as keyof RarityObject]
            );
            brawlerRarity.set(trueKeys as BrawlersRarityType[]);
            return updatedRarityChecked;
        case 'UPDATE_RARITY':
            const updatedState = { ...state, [action.name]: action.checked };
            const isAnyOtherChecked = Object.values(updatedState).some(Boolean);
            updatedState.all = !isAnyOtherChecked;
            const trueKeysUpdated = Object.keys(updatedState).filter(
                (key) => updatedState[key as keyof RarityObject]
            );
            brawlerRarity.set(trueKeysUpdated as BrawlersRarityType[]);
            return updatedState;
        default:
            return state;
    }
};


const Sidebar = (): JSX.Element => {
    const [rarityChecked, dispatch] = useReducer(rarityReducer, initialState);


    const handleRarityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        if (name === 'all') {
            dispatch({ type: 'UPDATE_ALL', checked });
        } else {
            dispatch({ type: 'UPDATE_RARITY', name, checked });
        }

    }

    return (
        <div className="flex flex-col h-full px-4 pb-4 pt-[5rem] bg-gray-800 shadow">
            <div className="space-y-3 mt-4">
                <div className="relative">

                    <input
                        type="text"
                        name="Search"
                        placeholder="Search a brawler"
                        className="h-[2.5rem] py-2 pl-5 text-sm rounded-md focus:outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-md">
                        {BrawlersRarity.map(rarity => (
                            <li key={useId()} className="rounded-sm">
                                <div
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <input type="checkbox" id={rarity} name={rarity} checked={rarityChecked[rarity]} onChange={handleRarityChange} className="w-4 h-4 text-yellow-700 accent-yellow-700 bg-gray-100 border-gray-300 rounded focus:ring-yellow-700 dark:focus:ring-yellow-700 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <span className="text-yellow-600">{capitalizeFirst(rarity)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        /*         <div className="container mx-auto mt-12">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total users
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                12,00
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Profit
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                $ 450k
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Orders
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                20k
                            </div>
                        </div>
                    </div>
                </div> */
    );
};
export default Sidebar;
