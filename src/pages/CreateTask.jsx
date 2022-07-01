import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateTask = () => {
  const [content, setContent] = useState("");

  // Create task
  const createTask = async (e) => {
    e.preventDefault();
    if (content) {
      try {
        const data = { content, status: "uncomplete" };
        await axios.post("https://red-marks-63494.herokuapp.com/task/create", data);
        toast.success("Task successfully created");
        setContent("");
      } catch (err) {
        toast.error("Task creation failed");
      }
    }
  };

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-4">
      <p className="text-xl text-dark font-bold">Create new task</p>
      <form onSubmit={createTask} className="flex flex-col">
        <input
          className="input input-bordered focus-within:outline focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2"
          type="text"
          placeholder="Write task content"
          autoComplete="off"
          spellCheck="false"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateTask;
