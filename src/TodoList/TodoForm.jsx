import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
    // console.log(onAddTodo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex my-5">
        <input
          type="text"
          className=" w- border-none outline-none shadow-xl shadow-blue-600 rounded px-5 py-3 font-medium "
          placeholder="Please Enter  A Task"
          value={inputValue.content}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="py-3 px-4 rounded bg-slate-800 text-white font-medium">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
