import React, { useState, useEffect } from "react";
import Item from "../components/Shared/Item";
import useTasks from "../hooks/useTasks";

const CompletedTask = () => {
  const { loading, tasks, fetchTasks, updateTask, deleteTask } = useTasks();
  const [completeTask, setCompleteTask] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks) {
      const filtered = tasks.filter((task) => task.status === "complete");
      setCompleteTask(filtered);
    }
  }, [tasks]);

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-4">
      {loading && <p className="font-semibold">Loading..</p>}
      {!loading && (
        <>
          <p className="text-xl text-dark font-bold">
            Completed Tasks ({completeTask.length})
          </p>
          {completeTask.map((task) => (
            <Item
              key={task._id}
              data={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CompletedTask;
