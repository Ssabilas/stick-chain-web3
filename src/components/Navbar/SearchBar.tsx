import { useEffect, useRef } from "react";

const SearchBars = () => {
  const searchBarRef = useRef<HTMLInputElement>(null);

  // Toggle Searchbar Keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        searchBarRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form action="#" className="w-[500px] mr-2">
      <div className="flex w-full gap-4 px-5 py-2 border-2 border-colorGrayDark/50 bg-colorGrayDark/50 rounded-xl">
        <i className="ri-search-line" aria-hidden="true"></i>
        <input
          type="text"
          id="searchBar"
          ref={searchBarRef}
          className="w-full bg-transparent outline-none"
          placeholder="Search items, collections and accounts"
          aria-label="Search"
        />
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
