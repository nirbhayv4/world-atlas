import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section className="max-w-7xl m-auto flex flex-col">
      <div className="my-6 py-3  text-4xl font-semibold text-center">
        <h1>
          Here are the Interesting Facts
          <br />
          we’re proud of
        </h1>
      </div>
      <div className="flex p-2 flex-wrap gap-5 justify-center">
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div
              id="card"
              className="max-w-sm p-6 h-auto border border-gray-200 rounded-lg bg-linear-71 from-[#080509] via-[#1a171c] to-[#080509]"
              key={id}
            >
              <div>
                <p>{countryName}</p>
                <p>
                  <span>Capital: </span>
                  {capital}
                </p>
                <p>
                  <span>Population: </span>
                  {population}
                </p>
                <p>
                  <span>Interesting Facts: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
