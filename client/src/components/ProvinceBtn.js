import React from "react";

function ProvinceBtn({ id, name, image }) {
  return (
    <div className="shadow-md rounded-bl-md rounded-br-md text-blue-700 cursor-pointer hover:text-orange-600">
      <img
        src={image}
        alt={id}
        className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-medium p-2  text-center">{name}</div>
    </div>
  );
}

export default ProvinceBtn;
