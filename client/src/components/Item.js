import React, { useState } from "react";
import icons from "../ultils/icons";

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;
const imagess = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
];
function Item({ images, star, title, attribute, description, address, user }) {
  const [isHoverHeart, setIshoverHeart] = useState(false);
  const indexs = [0, 1, 2, 3];
  const addresss = address.split(",").slice([-2]).join();

  description = JSON.parse(description);
  images = JSON.parse(images);
  return (
    <div className="flex border-t border-orange-700 p-2 ">
      <div className="w-2/5 flex flex-wrap gap-2 justify-center items-center relative">
        {images
          .filter((item, index) => indexs.includes(index))
          .map((i, idx) => {
            return (
              <img
                key={idx}
                src={i}
                alt="preview"
                className="w-[47%] h-[120px] object-cover"
              />
            );
          })}

        <span className="absolute bg-overlay-70 text-white rounded-md bottom-2 left-2">
          {images.length} ảnh
        </span>
        <span
          className="absolute bottom-2 right-2  text-white "
          onMouseEnter={() => setIshoverHeart(true)}
          onMouseLeave={() => setIshoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartLine size={20} color="red" />
          ) : (
            <RiHeartLine size={20} />
          )}
        </span>
      </div>
      <div className="w-3/5 min-h-[280px] relative">
        <div className="flex justify-between">
          <span className=" text-red-600 font-bold ml-1 ">
            {[...Array(star).keys()].map((item, index) => {
              return (
                <GrStar
                  key={index}
                  className="star-item"
                  size={20}
                  color="yellow"
                />
              );
            })}
            {title}
          </span>
          <div className="w-[10%] ">
            <BsBookmarkStarFill size={25} color="yellow" />
          </div>
        </div>
        <div className="my-2 flex justify-between items-center ">
          <span className="font-bold flex-3">{attribute.price}</span>
          <span className="flex-1">{attribute.acreage}</span>
          <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis">
            {addresss}
          </span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="absolute w-full flex justify-between bottom-0 ">
          <div className="flex">
            <img
              src={imagess[0]}
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            {user.name}
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Goi {user.phone}
            </button>
            <button
              type="button"
              className="text-blue-700 rounded-md border border-blue-700"
            >
              Nhan zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
