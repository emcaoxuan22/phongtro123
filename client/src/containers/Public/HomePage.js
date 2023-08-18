import React from "react";
import { text } from "../../ultills/constant";
import { Province } from "../../components";
import List from "./List";

function HomePage() {
  return (
    <div className="border border-red-500 flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <span>{text.HOME_DESCRIPTION}</span>
      </div>
      <Province />
      <div className="flex">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%]">side bar</div>
      </div>
    </div>
  );
}

export default HomePage;
