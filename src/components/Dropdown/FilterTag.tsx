interface RadioGroupInterface {
  inputId: string;
  inputValue: string;
  labelFor: string;
  labelContent: string;
}

const RadioGroup = ({
  inputId,
  inputValue,
  labelFor,
  labelContent,
}: RadioGroupInterface) => {
  return (
    <>
      <div>
        <input
          type="radio"
          id={inputId}
          name="filterTags"
          value={inputValue}
          className="hidden peer"
        />
        <label
          htmlFor={labelFor}
          className="px-5 py-2 text-white transition bg-transparent border-2 rounded-full cursor-pointer border-colorWhiteDark text-colorWhiteDark hover:bg-colorPurple hover:text-colorWhite hover:border-colorPurple peer-checked:bg-colorPurple peer-checked:text-colorWhite peer-checked:border-colorPurple"
        >
          {labelContent}
        </label>
      </div>
    </>
  );
};

const FilterTags = () => {
  return (
    <>
      <div className="flex flex-col self-center pl-16">
        <h2 className="text-3xl font-semibold">Filter Tags</h2>
        <form
          action="#"
          className="flex flex-col flex-wrap gap-6 mt-4 w-[380px]"
        >
          <div className="flex flex-row gap-2">
            <RadioGroup
              inputId="freeTags"
              inputValue="free"
              labelFor="freeTags"
              labelContent="Free"
            />

            <RadioGroup
              inputId="lessPriceTags"
              inputValue="lessPrice"
              labelFor="lessPriceTags"
              labelContent="Less Price"
            />
          </div>
          <div className="flex flex-row gap-2">
            <RadioGroup
              inputId="highPriceTags"
              inputValue="highPrice"
              labelFor="highPriceTags"
              labelContent="High Price"
            />

            <RadioGroup
              inputId="popularTags"
              inputValue="popular"
              labelFor="popularTags"
              labelContent="Popular"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterTags;
