import React, { useState } from "react";
import todolist from "../assets/to-do-list.png";
import checkmark from "../assets/check-mark.png";
import deleteicon from "../assets/delete.png";
import dryclean from "../assets/dry-clean.png";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState(""); 

  const handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };

  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, { task: newTasks, isCompleted: false }]);
      setNewTasks(""); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted }; // Toggle completion
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md w-11/12 bg-white min-h-[550px] flex flex-col rounded-2xl p-10">
      <div className="flex gap-3 items-center">
        <img src={todolist} alt="" className="size-8" />
        <p className="text-xl font-semibold">To-Do-List</p>
      </div>
      <div className="flex items-center my-8 bg-gray-200 rounded-full justify-between">
        <input
          onChange={handleInputChange}
          value={newTasks} 
          type="text"
          className="bg-transparent px-6 py-2 outline-none rounded-full"
          placeholder="Add Your Task"
        />
        <button
          onClick={addTask}
          className="px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600"
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="my-2">
            <div className="flex justify-between">
              <div onClick={() => toggleCompletion(index)} className="flex gap-4 cursor-pointer">
                <img className="size-6" src={task.isCompleted ? checkmark : dryclean} alt="" />
                <p className={`${task.isCompleted ? "line-through" : ""} text-medium`}>
                  {task.task}
                </p>
              </div>
              <img
                onClick={() => deleteTask(index)}
                className="size-6 cursor-pointer"
                src={deleteicon}
                alt="delete"
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;
