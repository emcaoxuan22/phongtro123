import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action";
import { formatVietnameseToString } from "../../ultills/common/formatVietnameseToString";

const notActive =
  "hover:bg-red-700 px-4 h-full flex items-center bg-secondary1";
const active = "hover:bg-red-700 px-4 h-full flex items-center  bg-red-700";

function Navigation() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);
  return (
    <div className="w-screen h-[40px] flex  justify-center items-center bg-blue-700 text-white">
      <div className="w-[1100px] flex items-center h-full">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index} className="text-sm font-medium h-full">
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Navigation;
