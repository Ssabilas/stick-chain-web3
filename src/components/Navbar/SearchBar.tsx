const SearchBars = () => {
  return (
    <>
      <form action="#" className="w-[500px] mr-2">
        <div className="flex w-full gap-4 px-5 py-2 border-2 border-colorGrayDark/50 bg-colorGrayDark/50 rounded-xl">
          <i className="ri-search-line"></i>
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search items, collections and accounts"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBars;
