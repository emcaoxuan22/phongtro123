import React from "react";
import icons from "../ultils/icons";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/common/formatVietnameseToString";
const { GrNext } = icons;

function ItemSidebar({ title, content, isDouble, type }) {
  const handlePrice = () => {};
  const navigate = useNavigate();

  const handleChangePage = (code) => {
    navigate({
      pathname: "/",
      search: createSearchParams({ [type]: code }).toString(),
    });
  };
  return (
    <div className="bg-white shadow-md rounded-md mb-4 p-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {!isDouble &&
        content &&
        content?.map((item, index) => {
          return (
            <Link key={index} to={`${formatVietnameseToString(item.value)}`}>
              <ul className="pt-2">
                <li>
                  <link />
                  <div className="flex items-center gap-2">
                    <GrNext />
                    <p>{item.value}</p>
                  </div>
                </li>
              </ul>
            </Link>
          );
        })}
      <div className="flex flex-wrap justify-start pr-8">
        {isDouble &&
          content &&
          content?.map((item, index) => {
            return (
              <div className="w-[50%]" key={index}>
                <div
                  onClick={() => {
                    handleChangePage(item.code);
                  }}
                >
                  <ul className="pt-2" onClick={handlePrice}>
                    <li>
                      <div className="flex items-center gap-2">
                        <GrNext />
                        <p>{item.value}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ItemSidebar;
