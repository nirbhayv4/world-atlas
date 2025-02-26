import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { getCountryIndvData } from "../../api/postApi";
import { Loader } from "../ui/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndvData(params.id);
        // console.log(res);
        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="max-w-7xl w-full m-auto ">
      {country && (
        <div className=" flex flex-col sm:flex-row justify-between p-3 ">
          <div className="w-full flex justify-center items-center p-3">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-[400px]"
            />
          </div>
          <div className="w-full p-3">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-3xl font-bold text-center">
                {country.name.official}
              </h1>

              <div className="flex flex-col gap-3">
                <p>
                  <span> Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span> Region: </span>
                  {country.region}
                </p>
                <p>
                  <span> Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span> Capital: </span>
                  {country.capital}
                </p>

                <p>
                  <span>Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
              <div>
                <NavLink to={`/country`} className="inline-flex ">
                  <button className=" text-sm rounded-xl border px-4 py-2 bg-[#202020] cursor-pointer">
                    Go Back
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
