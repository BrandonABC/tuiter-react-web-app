import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItems from "./tuit-items";
import {findTuitsThunk} from "../services/tuits-thunks";

const TuitList = () => {

  const {tuits, loading} = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  console.log(tuits)

  return (
    <ul className="list-group">
      { loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      {tuits.map((tuit) => (
        <TuitItems key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;