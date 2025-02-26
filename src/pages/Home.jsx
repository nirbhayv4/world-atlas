import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

export const Home = () => {
  return (
    <main className="max-w-7xl flex-1 m-auto flex flex-col sm:flex-row items-center ">
      <div className=" flex flex-col sm:order-1 order-2  gap-5 w-full p-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Explore the World, One Country at a Time.
          </h1>
        </div>
        <div>
          <p className="text-sm ">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
        </div>
        <div>
          <NavLink to={`/country`} className="inline-flex">
            <button className="flex gap-2 items-center  rounded-xl border px-4 py-1 bg-[#202020] cursor-pointer">
              Start Exploring <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-full p-3 sm:order-2 order-1">
        <img
          src="/images/world.png"
          alt="world-image"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};
