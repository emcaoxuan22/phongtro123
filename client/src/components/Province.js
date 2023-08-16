import React from "react";
import { ProvinceBtn } from "../components";
import { location } from "../ultills/constant";
function Province() {
  return (
    <div className="flex items-center justify-center py-5 gap-3">
      {location.map((item) => {
        return (
          <ProvinceBtn key={item.id} name={item.name} image={item.image} />
        );
      })}
    </div>
  );
}

export default Province;
