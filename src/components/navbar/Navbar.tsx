

const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-gray-800 shadow-lg w-full fixed flex flex-row items-center justify-between p-4">
        <div className="flex flex-row gap-3 items-center">
            <img src="/images/brawl-stars-logo.svg"/>
            <span className="text-white text-xl">Brawlipedia</span>
        </div>
        <div className="flex flex-row gap-4 text-white text-lg">
            <a href="/home/">Home</a>
            <a href="/brawlers/">Brawlers</a>
            <a href="/maps/">Maps</a>
            <a href="/clubs/">Clubs</a>
            <a href="/about-me/">About me</a>
        </div>
    </nav>
    )
};
export default Navbar;