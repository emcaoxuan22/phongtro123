import React, { useEffect, useState } from "react";
import { text } from "../../ultils/constant";
import { Province, ItemSidebar } from "../../components";
import List from "./List";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action"

function HomePage() {
  const [params] = useSearchParams();
  const dispatch = useDispatch()
  const { categories, areas, prices } = useSelector((state) => state.app);

  useEffect(()=>{
    dispatch(actions.getAreas())
    dispatch(actions.getPrices())
  }, [])
  console.log("value categois", categories);
  console.log("value areas", areas);
  console.log("value prices", prices);
  return (
    <div className="border border-red-500 flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <span>{text.HOME_DESCRIPTION}</span>
      </div>
      <Province />
      <div className="flex">
        <div className="w-[70%]">
          <List page={params.get("page")} />
          <Pagination number={params.get("page")} />
        </div>
        <div className="w-[30%] flex flex-col  ">
          <ItemSidebar title="Danh sách cho thuê" content={categories} />
          <ItemSidebar title="Xem theo Giá" isDouble ={true} content={prices}/>
          <ItemSidebar title="Xem theo diện tích" isDouble ={true} content={areas}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
