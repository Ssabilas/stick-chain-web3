import { useState } from "react";

const FilterPrices = () => {
  const [inputGroup, setInputGroup] = useState(true);

  return (
    <>
      <div className="w-[315px] flex self-center flex-col mt-12">
        <h2
          className="text-3xl font-semibold cursor-pointer"
          onClick={() => setInputGroup(!inputGroup)}
        >
          Filter Price{" "}
          <i
            className={
              inputGroup
                ? `pl-[6.8rem] ri-arrow-down-s-line`
                : `pl-[6.8rem] ri-arrow-up-s-line`
            }
          ></i>
        </h2>
        {inputGroup && (
          <form
            action="#"
            className="flex flex-row w-[380px] gap-2 items-center mt-4"
          >
            <input
              type="text"
              placeholder="From"
              className="w-[30%] border-2 border-colorGray px-2 py-1 rounded-xl outline-none"
            />
            <span>-</span>
            <input
              type="text"
              placeholder="To"
              className="w-[30%] border-2 border-colorGray px-2 py-1 rounded-xl outline-none"
            />
          </form>
        )}
      </div>
    </>
  );
};

export default FilterPrices;
