export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <div className="m-10 flex flex-col gap-3 sm:flex-row justify-evenly items-center">
      <div>
        <input
          className="px-3 py-1 rounded-2xl border border-gray-500 hover:border-white focus:outline-none focus:ring-1"
          type="text"
          value={search}
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button
          onClick={() => sortCountries("asc")}
          className=" text-sm rounded-2xl border border-gray-500 hover:border-white px-4 py-2 bg-[#202020] cursor-pointer"
        >
          ASCE
        </button>
      </div>
      <div>
        <button
          onClick={() => sortCountries("dsc")}
          className=" text-sm rounded-2xl border border-gray-500 hover:border-white px-4 py-2 bg-[#202020] cursor-pointer"
        >
          DESC
        </button>
      </div>

      <div>
        <select
          value={filter}
          onChange={handleSelectChange}
          className=" text-sm rounded-2xl border border-gray-500 px-4 py-2 bg-[#202020] focus:outline-none focus:ring-1 cursor-pointer"
        >
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Americas">America</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
