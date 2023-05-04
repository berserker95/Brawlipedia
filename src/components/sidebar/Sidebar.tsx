import { useId } from 'react';

const BrawlersRarity = ['All', 'Common', 'Rare', 'Super Rare', 'Epic', 'Mythic', 'Legendary', 'Chromatic'] as const;
const Sidebar = (): JSX.Element => {
    return (
        <div className="flex flex-col h-screen px-4 pb-4 pt-[5rem] bg-gray-800 shadow w-70">
            <div className="space-y-3 mt-4">
                <div className="relative">
                   
                    <input
                        type="text"
                        name="Search"
                        placeholder="Search a brawler"
                        className="w-full h-[2.5rem] py-2 pl-5 text-sm rounded-md focus:outline-none"
                    />
                     <span className="absolute inset-y-0 right-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
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
                             <a
                                 href="#"
                                 className="flex items-center p-2 space-x-3 rounded-md"
                             >
                                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="w-6 h-6 text-gray-100"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor"
                                     strokeWidth={2}
                                 >
                                     <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                     />
                                 </svg>
                                 <span className="text-gray-100">{rarity}</span>
                             </a>
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
