import React from "react";
import "./_categoriesBar.scss";

const CategoriesBar = () => {
  const keywords = ["All", "React", "JS", "MYSQL", "MariaDB"];

  return (


const [active]


    //map을 이용해 구현해줍니다.
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span key={i}>{value}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
