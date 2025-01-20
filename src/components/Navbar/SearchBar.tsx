const SearchBars = () => {
  return (
    <>
      <form action="#" className="w-[600px]">
        <div className="bg-colorGrayDark px-5 py-2 w-full flex gap-4 rounded-xl border-2 border-colorGray">
          <i className="ri-search-line"></i>
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Search items, collections, and accounts"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBars;
