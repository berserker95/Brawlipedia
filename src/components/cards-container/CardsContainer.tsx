import type { FC } from "react";

interface CardsContainerProps {
    brawlersList: Array<any>;
}

const CardsContainer: FC<CardsContainerProps> = ({ brawlersList }): JSX.Element => {
    return (
        <div className="p-10 flex flex-row flex-wrap gap-3">

            <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <img className="w-full" src="/mountain.jpg" alt="Mountain" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Mountain</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg  max-w-sm">
                <img className="w-full" src="/river.jpg" alt="River" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">River</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg  max-w-sm">
                <img className="w-full" src="/forest.jpg" alt="Forest" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Forest</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                </div>
            </div>
        </div>
    )
};
export default CardsContainer;