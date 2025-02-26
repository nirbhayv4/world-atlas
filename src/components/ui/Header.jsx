import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#202020] sm:h-[68px] w-full">
      <div className="max-w-7xl m-auto flex justify-between items-center px-3 py-5">
        <div>
          <NavLink to="/">
            <h1 className="text-xl font-bold">WorldAtlas</h1>
          </NavLink>
        </div>
        <div className="hidden sm:flex list-none gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/country">Country</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
        <div className="sm:hidden">
          <button className="text-2xl font-bold" onClick={handleButtonToggle}>
            {show ? <FaXmark /> : <IoMenu />}
          </button>
        </div>
      </div>
      <div
        className={
          show ? "flex flex-col items-center list-none gap-5 pb-3" : "hidden"
        }
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/country">Country</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </div>
    </div>
  );
};
