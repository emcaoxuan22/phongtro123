import React, { useState, useEffect, memo } from "react";
import { PageNumber } from "../../components";
import icons from "../../ultils/icons";
import { useSelector } from "react-redux";
const { GrLinkNext } = icons;
function Pagination({ number }) {
  const { posts, count } = useSelector((state) => state.post);

  const [currentPage, setCurrentPage] = useState(+number);
  const [isHideStart, setIsHideStart] = useState(true);
  const [isHideEnd, setIsHideEnd] = useState(true);
  const [arrPage, setArrPage] = useState([]);
  const [tang, setTang] = useState(1);
  const [tang1, setTang1] = useState("long");
  useEffect(() => {
    let maxPage = Math.floor(+count / posts?.length);
    let end = currentPage + 2 > maxPage ? maxPage : currentPage + 2;
    let start = currentPage - 2 <= 0 ? 1 : currentPage - 2;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    setCurrentPage(+number);
    if (arrPage === [] || arrPage?.includes(1)) {
      setIsHideStart(false);
    } else {
      setIsHideStart(true);
    }
    if (arrPage?.includes(maxPage)) {
      setIsHideEnd(false);
    } else {
      setIsHideEnd(true);
    }
  }, [count, posts, currentPage, number]);

  useEffect(() => {
    setTang(2);
  }, [arrPage]);
  console.log("re-render pagination");
  return (
    <div className="flex items-center justify-center gap-2 py-5">
      {isHideStart && <PageNumber number="1" />}
      {isHideStart && <PageNumber number="..." />}
      {arrPage?.map((item) => (
        <PageNumber key={item} number={item} currentPage={number || 1} />
      ))}
      {isHideEnd && <PageNumber number="..." />}
      {isHideEnd && <PageNumber number={<GrLinkNext />} />}
    </div>
  );
}

export default memo(Pagination);
