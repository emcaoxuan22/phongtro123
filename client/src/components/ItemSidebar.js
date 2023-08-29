import React from "react";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/common/formatVietnameseToString";
const { GrNext } = icons;
function ItemSidebar({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-md mb-4 p-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {content &&
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
                  {/* <ul className="p-2">
                  <li>
                    <div className="flex items-center">
                      <GrNext />
                      <p>Cho thuê phong tro mini</p>
                    </div>
                  </li>
                </ul> */}
                </li>
              </ul>
            </Link>
          );
        })}
    </div>
  );
}

export default ItemSidebar;
