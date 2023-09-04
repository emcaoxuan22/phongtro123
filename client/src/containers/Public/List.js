import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPostsHomePageLimit } from "../../store/action";
function List({ page, query }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  console.log("query tai list", query);
  useEffect(() => {
    dispatch(getPostsHomePageLimit(page, query));
  }, [page, query]);

  return (
    <div className="border-green-600 p-2 bg-white shadow-md rounded-md ">
      <div className=" flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh Sach Tin Dang</h4>
        <span>Cap nhat: 12:05 25/08/2022</span>
      </div>
      <div className="flex items-center gap-1">
        <span>Sap xep</span>
        <Button bgColor="bg-gray-300" text="mac dinh" />
        <Button bgColor="bg-gray-300" text="moi nhat" />
      </div>
      {posts &&
        posts.map((item, index) => {
          return (
            <Item
              key={index}
              star={+item.star}
              title={item.title}
              attribute={item.attributes}
              description={item.description}
              address={item.address}
              user={item.user}
              images={item.images.image}
            />
          );
        })}
    </div>
  );
}
export default List;
