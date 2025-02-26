import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/ui/CountryCard";
import { SearchFilter } from "../components/ui/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        // console.log(res);

        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="max-w-7xl m-auto flex flex-col">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="flex p-2 flex-wrap gap-x-7 gap-y-10 justify-center">
        {filterCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};
