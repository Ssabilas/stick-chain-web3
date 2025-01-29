import { useState } from "react";

interface InputInterface {
  inputValue: number | null;
  inputPlaceHolder: string;
  onChange: (value: number | null) => void;
}

const InputComponent: React.FC<InputInterface> = ({
  inputValue,
  inputPlaceHolder,
  onChange,
}) => {
  return (
    <input
      type="number"
      placeholder={inputPlaceHolder}
      value={inputValue ?? ""}
      onChange={(e) => {
        const val = e.target.value ? parseFloat(e.target.value) : null;
        onChange(val);
      }}
      className="w-[30%] border-2 border-colorGray px-2 py-1 rounded-xl outline-none"
    />
  );
};

interface FilterInterface {
  inputValueFrom: number | null;
  inputPlaceHolderFrom: string;
  setInputValueFrom: (value: number | null) => void;
  inputValueTo: number | null;
  inputPlaceHolderTo: string;
  setInputValueTo: (value: number | null) => void;
}

const FilterPrices: React.FC<FilterInterface> = ({
  inputPlaceHolderFrom,
  inputValueFrom,
  setInputValueFrom,
  inputPlaceHolderTo,
  inputValueTo,
  setInputValueTo,
}) => {
  const [inputGroup, setInputGroup] = useState(true);

  return (
    <div className="w-[315px] flex self-center flex-col mt-12">
      <h2
        className="text-3xl font-semibold cursor-pointer"
        onClick={() => setInputGroup(!inputGroup)}
      >
        Filter Price
        <i
          className={
            inputGroup
              ? `pl-[6.8rem] ri-arrow-down-s-line`
              : `pl-[6.8rem] ri-arrow-up-s-line`
          }
        ></i>
      </h2>
      {inputGroup && (
        <div className="flex flex-row w-[380px] gap-2 items-center mt-4">
          <InputComponent
            inputPlaceHolder={inputPlaceHolderFrom}
            inputValue={inputValueFrom}
            onChange={setInputValueFrom}
          />
          <hr className="w-4 border-b-2 border-colorPurple" />
          <InputComponent
            inputPlaceHolder={inputPlaceHolderTo}
            inputValue={inputValueTo}
            onChange={setInputValueTo}
          />
        </div>
      )}
    </div>
  );
};

export default FilterPrices;
