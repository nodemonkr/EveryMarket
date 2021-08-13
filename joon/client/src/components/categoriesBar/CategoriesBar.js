import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
  "All",
  "React",
  "JS",
  "MYSQL",
  "MariaDB",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    //map을 이용해 구현해줍니다.
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
