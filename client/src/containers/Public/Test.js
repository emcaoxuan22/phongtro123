import React, { useEffect, useState } from "react";

function Test() {
  const [tang, setTang] = useState(1);
  useEffect(() => {
    setTang(2);
  });

  return (
    <div className="flex items-center justify-center gap-2 py-5">
      {/* {isHideStart && <PageNumber number="1" />}
      {isHideStart && <PageNumber number="..." />}
      {arrPage?.map((item) => (
        <PageNumber key={item} number={item} currentPage={number || 1} />
      ))}
      {isHideEnd && <PageNumber number="..." />}
      {isHideEnd && (
        <PageNumber number={<GrLinkNext />} baka={{ long: "dzai" }} />
      )} */}
    </div>
  );
}

export default Test;
