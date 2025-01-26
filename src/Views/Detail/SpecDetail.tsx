import { useState } from "react";

interface TitleSpecInterface {
  Title: string;
}

const TitleSpecification = ({ Title }: TitleSpecInterface) => {
  return (
    <li className="flex flex-row items-start justify-start gap-2 mt-4">
      <h2 className="self-start mr-32 text-start">{Title}</h2>
    </li>
  );
};

interface DescriptionSpecInterface {
  Description: string;
}

const DescriptionSpecification = ({
  Description,
}: DescriptionSpecInterface) => {
  return (
    <li className="flex flex-row items-start justify-start gap-2 mt-4">
      <h2 className="self-start mr-32 text-start">{Description}</h2>
    </li>
  );
};

const SpecDetails = () => {
  const [spec, setSpec] = useState(true);

  return (
    <>
      <section className="flex items-start justify-center">
        <div className="w-full">
          <div className="w-[100%] ml-28">
            <div className="flex flex-row items-center">
              <button
                className="text-3xl font-semibold cursor-pointer border-colorWhite "
                onClick={() => setSpec(!spec)}
              >
                {spec === true
                  ? `Mininum Specification`
                  : `Maximum Specification`}{" "}
                <i className="pr-2 ri-arrow-up-down-line"></i>
              </button>
            </div>
            <ul className="flex items-center justify-start gap-24">
              <ul className="flex flex-col items-start justify-start gap-2 mt-4">
                <TitleSpecification Title="Operation System" />
                <TitleSpecification Title="Processor" />
                <TitleSpecification Title="Memory" />
                <TitleSpecification Title="Last Updated" />
                <TitleSpecification Title="Direct X" />
              </ul>
              {spec === true ? (
                <ul className="flex flex-col items-end justify-end gap-2 mt-4 font-semibold text-colorAqua">
                  <DescriptionSpecification Description="Windows 10" />
                  <DescriptionSpecification Description="Intel i3-4150, Ryzen 3 1200" />
                  <DescriptionSpecification Description="8GB RAM" />
                  <DescriptionSpecification Description="GTX 960" />
                  <DescriptionSpecification Description="Version 10" />
                </ul>
              ) : (
                <ul className="flex flex-col items-end justify-end gap-2 mt-4 font-semibold text-colorAqua">
                  <DescriptionSpecification Description="Windows 11" />
                  <DescriptionSpecification Description="Intel i7-4150, Ryzen 5 1200" />
                  <DescriptionSpecification Description="16GB RAM" />
                  <DescriptionSpecification Description="RTX 2050" />
                  <DescriptionSpecification Description="Version 11" />
                </ul>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecDetails;
