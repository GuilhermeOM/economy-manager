import { House, ChartBar } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="w-screen h-16 p-2 px-8 inline-flex fixed top-0 left-0 right-0 items-center">
      <div className="">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-indigo-500 to-blue-600 text-transparent bg-clip-text hover:from-indigo-600 hover:to-blue-800 cursor-pointer">
          ECONOMY MANAGER
        </h1>
      </div>
      <div className="ml-auto inline-flex gap-4">
        <House
          size={24}
          className="hover:text-indigo-500 transition duration-2 cursor-pointer"
        />
        <ChartBar
          size={24}
          className="hover:text-indigo-500 transition duration-2 cursor-pointer"
        />
      </div>
    </div>
  );
};
