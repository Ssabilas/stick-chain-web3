import { useEffect, useRef, useState, useCallback } from "react";
import Game from "../../Json/Home/CardListView.json";
import { encryptData } from "../../Utils/parseURL";

interface GameItem {
  id: string;
  name: string;
  rate: number;
  thumbnail: string;
  category: string;
  price: number;
}

const SearchBars = () => {
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredGame, setFilteredGame] = useState<GameItem[]>([]);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  // Toggle Searchbar Keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        searchBarRef.current?.focus();
        setIsSearchActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      setSearchItem(searchTerm);

      const filteredItems = Game.filter((item: GameItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredGame(filteredItems);
    },
    []
  );
  return (
    <form action="#" className="w-[500px] mr-2">
      <div className="flex w-full gap-4 px-5 py-2 border-2 border-colorGrayDark/50 bg-colorGrayDark/50 rounded-xl">
        <i className="ri-search-line" aria-hidden="true"></i>
        <input
          type="text"
          id="searchBar"
          ref={searchBarRef}
          className="w-full bg-transparent outline-none"
          placeholder="Search Games"
          aria-label="Search"
          value={searchItem}
          onChange={handleInputChange}
          onFocus={() => setIsSearchActive(true)}
          onBlur={() => setTimeout(() => setIsSearchActive(false), 200)} // Menunda blur
          autoComplete="off"
        />

        {/* Card */}
        {isSearchActive && filteredGame.length > 0 && (
          <ul
            className="absolute w-[500px] left-0 top-14 bg-colorGrayDark/50 border-2 border-colorGrayDark rounded-2xl drop-shadow-md"
            onMouseDown={(e) => e.preventDefault()} // Mencegah blur saat klik
          >
            {filteredGame.slice(0, 3).map((item, index) => {
              const contentID = item.id.replace(/ /g, "-").toLowerCase();
              const encryptParams = encryptData(contentID);

              return (
                <div
                  className="flex items-center w-full h-24 px-5 py-2 transition-all cursor-pointer hover:opacity-80"
                  key={index}
                  onMouseDown={(e) => {
                    e.preventDefault(); // Mencegah blur sebelum navigasi
                    window.location.href = `/games/${encodeURIComponent(
                      encryptParams
                    )}`;
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="object-cover w-16 h-16 rounded-lg"
                  />
                  <div className="flex flex-col ml-4">
                    <li className="text-lg font-semibold text-white">
                      {item.name}
                    </li>
                    <div className="flex flex-row">
                      <li className="flex flex-row gap-1 text-lg text-colorAqua">
                        <i className="ri-eth-fill"></i>
                        {item.price}
                      </li>
                      <li className="flex flex-row gap-1 ml-4 text-lg text-white">
                        <i className="ri-star-s-fill text-colorYellow"></i>
                        {item.rate}
                      </li>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        )}

        <span className="flex flex-row w-16 gap-1 px-1 mr-4 text-sm rounded-md cursor-default opacity-20">
          <span className="px-2 text-sm border rounded-md border-colorWhite">
            Ctrl
          </span>
          +
          <span className="px-2 text-sm border rounded-md border-colorWhite">
            /
          </span>
        </span>
      </div>
    </form>
  );
};

export default SearchBars;
