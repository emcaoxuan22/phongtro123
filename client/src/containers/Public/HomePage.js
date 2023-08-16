import React from "react";
import { text } from "../../ultills/constant";
import { Province } from "../../components";

function HomePage() {
  return (
    <div className="border border-red-500 flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <span>{text.HOME_DESCRIPTION}</span>
      </div>
      <Province />
    </div>
  );
}

export default HomePage;
