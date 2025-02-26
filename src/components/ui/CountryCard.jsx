import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="max-w-80 w-full p-6 h-auto border border-gray-200 rounded-2xl transition-all duration-600 hover:scale-105 bg-linear-71 from-[#080509] via-[#1a171c] to-[#080509]">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center items-center h-40">
          <img
            src={flags.svg}
            alt={flags.alt}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p>
            {name.common.length > 15
              ? name.common.slice(0, 15) + "..."
              : name.common}
          </p>
          <p>
            <span>Population: </span> {population.toLocaleString()}
          </p>
          <p>
            <span>Region: </span> {region}
          </p>
          <p>
            <span>Capital: </span> {capital[0]}
          </p>
        </div>
        <div>
          <NavLink to={`/country/${name.common}`} className="inline-flex">
            <button className="flex items-center gap-2  text-sm rounded-xl border px-4 py-2 bg-[#202020] cursor-pointer">
              Read More <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
