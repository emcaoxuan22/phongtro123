import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation, Search } from "../Public/";

function Home() {
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Header />
      <Navigation />

      <div className="w-[1100px] flex flex-col justify-start mt-3">
        <Search />
        <Outlet />
      </div>
      <div className=" w-full h-[500px] bg-red-600"></div>
    </div>
  );
}

export default Home;
