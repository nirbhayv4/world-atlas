import { MoonLoader } from "react-spinners";
export const Loader = () => {
  return (
    <div className="flex h-lvh justify-center items-center ">
      <MoonLoader color="#ffffff" loading={true} />
    </div>
  );
};
