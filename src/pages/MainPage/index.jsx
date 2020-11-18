import React from "react";

const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];
const MainPage = () => {
  return (
    <div>
      {data.map((e) => (
        <div style={{ height: "100px" }}>
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
          {e}
        </div>
      ))}
    </div>
  );
};
export default MainPage;
