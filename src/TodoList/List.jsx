import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const List = ({ data, checked, onHandleDelete, handleChecked }) => {
  return (
    <div>
      <div className="flex w-full gap-12  border-b-2 shadow-xl shadow-teal-600 text-white uppercase rounded-3xl p-4 justify-between items-center mb-3 flew-wrap">
        <div className="content whitespace-pre-wrap text-start">
          <h1
            className={`text-2xl font-bold ${
              checked ? "line-through" : "no-underline"
            }`}
          >
            {data}
          </h1>
        </div>
        <div className="btn">
          <button
            onClick={() => handleChecked(data)}
            className="py-3 px-4 rounded bg-green-600 text-white font-medium"
          >
            <IoCheckmarkDoneCircleSharp />
          </button>
          <button
            onClick={() => onHandleDelete(data)}
            className="py-3 px-4 rounded bg-red-600 text-white font-medium"
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
