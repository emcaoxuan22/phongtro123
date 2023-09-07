import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation, Search } from "../Public/";
import { Contact, Intro } from "../../components";

function Home() {
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-3/5 flex flex-col justify-start mt-3">
        <Search />
        <Outlet />
      </div>
      <Intro/>
      <Contact/>
      <div className=" w-full h-[500px] bg-red-600"></div>
    </div>
  );
}

export default Home;
