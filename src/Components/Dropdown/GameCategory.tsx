import { useState } from "react";

interface CategoriesProps {
  onClick: () => void;
  categoryName: string;
  totalItem: number;
}

const CategoriesEvent = ({
  onClick,
  categoryName,
  totalItem,
}: CategoriesProps) => {
  return (
    <li
      className="flex flex-row justify-between px-12 py-2 font-semibold rounded-full cursor-pointer hover:bg-colorPurple"
      onClick={onClick}
    >
      <p>{categoryName}</p>
      <i className="self-end">{totalItem}</i>
    </li>
  );
};

const ListCategories = () => {
  return (
    <ul className="flex text-xl gap-2 flex-col pt-12 w-[400px]">
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"All Categories"}
        totalItem={18}
      />
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"First Person"}
        totalItem={12}
      />
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"Single Player"}
        totalItem={24}
      />
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"Multiplayer"}
        totalItem={12}
      />
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"Action"}
        totalItem={8}
      />
      <CategoriesEvent
        onClick={() => window.location.assign("/")}
        categoryName={"Adventure"}
        totalItem={30}
      />
    </ul>
  );
};

const GameCategories = () => {
  const [categories, setCategories] = useState(true);

  return (
    <div className="flex flex-col items-center mt-40 mb-12">
      <h3
        className="flex flex-row gap-12 text-3xl font-semibold cursor-pointer"
        onClick={() => setCategories(!categories)}
      >
        Game Category
        <i
          className={categories ? `ri-arrow-down-s-line` : `ri-arrow-up-s-line`}
        ></i>
      </h3>
      {categories && <ListCategories />}
    </div>
  );
};

export default GameCategories;
