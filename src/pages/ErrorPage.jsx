import { NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex h-lvh justify-center items-center flex-col gap-3">
      <div>
        <h1>Oops! An Error Occurred.</h1>
      </div>
      <div>{error && <p className="mb-3">{error.data}</p>}</div>
      <div>
        <NavLink to="/" className="rounded-xl border px-3 py-2 bg-[#202020]">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};
