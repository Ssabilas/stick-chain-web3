import { MouseEventHandler } from "react";

interface EventInterface {
  onClick: MouseEventHandler;
  categoryName: string;
  changeColor: string;
}

const FilterEvent: React.FC<EventInterface> = ({
  onClick,
  categoryName,
  changeColor,
}) => {
  return (
    <li
      className={`px-5 py-2 cursor-pointer hover:bg-colorGrayDark border-2 text-base font-medium  rounded-full ${changeColor}`}
      onClick={onClick}
    >
      {categoryName}
    </li>
  );
};

interface FilterInterface {
  clickCategoryNone: MouseEventHandler;
  categoryNone: string;
  changeColorNone: string;
  clickCategoryNormalPrice: MouseEventHandler;
  categoryNormalPrice: string;
  changeColorNormalPrice: string;
  clickCategoryLowPrice: MouseEventHandler;
  categoryLowPrice: string;
  changeColorLowPrice: string;
  clickCategoryHighPrice: MouseEventHandler;
  categoryHighPrice: string;
  changeColorHighPrice: string;
}

const FilterTags: React.FC<FilterInterface> = ({
  clickCategoryNone,
  categoryNone,
  changeColorNone,
  clickCategoryNormalPrice,
  categoryNormalPrice,
  changeColorNormalPrice,
  clickCategoryLowPrice,
  categoryLowPrice,
  changeColorLowPrice,
  clickCategoryHighPrice,
  categoryHighPrice,
  changeColorHighPrice,
}) => {
  return (
    <>
      <div className="flex flex-col self-center pl-16">
        <h2 className="text-3xl font-semibold">Filter Tags</h2>
        <ul className="flex flex-col flex-wrap gap-4 mt-4 w-[380px]">
          <div className="flex flex-row gap-2">
            <FilterEvent
              onClick={clickCategoryNone}
              categoryName={categoryNone}
              changeColor={changeColorNone}
            />
            <FilterEvent
              onClick={clickCategoryLowPrice}
              categoryName={categoryLowPrice}
              changeColor={changeColorLowPrice}
            />
          </div>
          <div className="flex flex-row gap-2">
            <FilterEvent
              onClick={clickCategoryNormalPrice}
              categoryName={categoryNormalPrice}
              changeColor={changeColorNormalPrice}
            />
            <FilterEvent
              onClick={clickCategoryHighPrice}
              categoryName={categoryHighPrice}
              changeColor={changeColorHighPrice}
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default FilterTags;
