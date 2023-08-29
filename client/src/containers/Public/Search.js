import React from "react";
import { SearchItem } from "../../components";
import icons from "../../ultils/icons";

const {
  GrNext,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
function Search() {
  return (
    <div className="h-[55px] flex p-2 bg-secondary2 rounded-lg gap-2 w-full">
      <SearchItem
        IconBefore={<MdOutlineHouseSiding />}
        IconAfter={<GrNext />}
        text="Phong tro, nha tro"
        fontWeight
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<GrNext />}
        text="toan quoc"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<GrNext />}
        text="chon gia"
      />
      <SearchItem
        IconBefore={<RiCrop2Line />}
        IconAfter={<GrNext />}
        text="chon dien tich"
      />
      <button className="bg-secondary1 w-full outline-none flex justify-center items-center gap-2 py-2 px-4">
        <FiSearch />
        tim kiem
      </button>
    </div>
  );
}

export default Search;
