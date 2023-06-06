import React from "react";
import { useSelector } from "react-redux";
import TuitItems from "./tuit-items";

const TuitList = () => {

  const tuits = useSelector((state) => state.tuits.tuits);
  console.log(tuits)

  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitItems key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;