import { MouseEventHandler } from "react";

interface CategoriesProps {
  onClick: MouseEventHandler;
  categoryName: string;
  totalItem: number;
  changeColor: string;
}

const CategoriesEvent: React.FC<CategoriesProps> = ({
  onClick,
  categoryName,
  totalItem,
  changeColor,
}) => {
  return (
    <li
      className={`flex flex-row justify-between px-12 py-2 font-semibold rounded-full cursor-pointer hover:bg-colorGrayDark ${changeColor}`}
      onClick={onClick}
    >
      <p>{categoryName}</p>
      <i className="self-end">{totalItem}</i>
    </li>
  );
};

interface ListCategories {
  clickCategoryAll: MouseEventHandler;
  categoryAll: string;
  totalItemAll: number;
  changeColorAll: string;
  clickCategoryOne: MouseEventHandler;
  categoryOne: string;
  totalItemOne: number;
  changeColorOne: string;
  clickCategoryTwo: MouseEventHandler;
  categoryTwo: string;
  totalItemTwo: number;
  changeColorTwo: string;
  clickCategoryThree: MouseEventHandler;
  categoryThree: string;
  totalItemThree: number;
  changeColorThree: string;
  clickCategoryFour: MouseEventHandler;
  categoryFour: string;
  totalItemFour: number;
  changeColorFour: string;
  clickCategoryFive: MouseEventHandler;
  categoryFive: string;
  totalItemFive: number;
  changeColorFive: string;
}

const GameCategories: React.FC<ListCategories> = ({
  clickCategoryAll,
  categoryAll,
  totalItemAll,
  changeColorAll,
  clickCategoryOne,
  categoryOne,
  totalItemOne,
  changeColorOne,
  clickCategoryTwo,
  categoryTwo,
  totalItemTwo,
  changeColorTwo,
  clickCategoryThree,
  categoryThree,
  totalItemThree,
  changeColorThree,
  clickCategoryFour,
  categoryFour,
  totalItemFour,
  changeColorFour,
  clickCategoryFive,
  categoryFive,
  totalItemFive,
  changeColorFive,
}) => {
  return (
    <ul className="flex text-xl gap-2 flex-col pt-12 w-[400px]">
      <CategoriesEvent
        onClick={clickCategoryAll}
        categoryName={categoryAll}
        totalItem={totalItemAll}
        changeColor={changeColorAll}
      />
      <CategoriesEvent
        onClick={clickCategoryOne}
        categoryName={categoryOne}
        totalItem={totalItemOne}
        changeColor={changeColorOne}
      />
      <CategoriesEvent
        onClick={clickCategoryTwo}
        categoryName={categoryTwo}
        totalItem={totalItemTwo}
        changeColor={changeColorTwo}
      />
      <CategoriesEvent
        onClick={clickCategoryThree}
        categoryName={categoryThree}
        totalItem={totalItemThree}
        changeColor={changeColorThree}
      />
      <CategoriesEvent
        onClick={clickCategoryFour}
        categoryName={categoryFour}
        totalItem={totalItemFour}
        changeColor={changeColorFour}
      />
      <CategoriesEvent
        onClick={clickCategoryFive}
        categoryName={categoryFive}
        totalItem={totalItemFive}
        changeColor={changeColorFive}
      />
    </ul>
  );
};

export default GameCategories;
