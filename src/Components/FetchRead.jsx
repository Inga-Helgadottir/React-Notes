import React from "react";
import { readUrl } from "../settings";
import { useState, useEffect } from "react";
import FetchReadJr from "./FetchReadJr";

const FetchRead = () => {
  const [manySideList, setManySideList] = useState([]);

  useEffect(() => {
    const getMany = async () => {
      const fromAPI = await getManySides();
      setManySideList(fromAPI);
    };
    getMany();
  }, []);

  const getManySides = async () => {
    // document.querySelector(".loading").style.display = "block";
    const res = await fetch(readUrl);
    const data = await res.json();
    // document.querySelector(".loading").style.display = "none";
    // console.log("data");
    // console.log(data);
    return data;
  };

  return (
    <div>
      {manySideList.length > 0 &&
        manySideList.map((element, index) => {
          return <FetchReadJr key={index} props={element} />;
        })}
    </div>
  );
};

export default FetchRead;
