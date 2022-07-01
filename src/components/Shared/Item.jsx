import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const Item = ({ data, updateTask, deleteTask }) => {
  const { _id, content, status } = data;
  return (
    <div className="flex items-center justify-between p-4 shadow-sm rounded-md">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          defaultChecked={status === "uncomplete" ? false : true}
          className="checkbox checkbox-primary"
          onClick={() => updateTask(_id, status)}
        />
        <p
          className={`font-semibold ${status === "complete" && "line-through"}`}
        >
          {content}
        </p>
      </div>
      <IoTrashOutline
        onClick={() => deleteTask(_id)}
        className="text-primary text-xl cursor-pointer"
      />
    </div>
  );
};

export default Item;
