import { Outlet } from "react-router";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
