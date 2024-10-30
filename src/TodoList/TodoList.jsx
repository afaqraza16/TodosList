import React, { useState } from "react";
import TodoForm from "./TodoForm";
import List from "./List";
import DateTodo from "./DateTodo";
import { GetdataFromLocalStorage, setDataInLocalStorage } from "./LocalStorage";

const TodoList = () => {
  const [storeValue, setStoreValue] = useState(() => GetdataFromLocalStorage());
  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //  To check that if the content id empty or not
    if (!content) return;
    const ifTodoMethod = storeValue.find(
      // (todo) => todo.id === id && todo.content === content
      (currTask) => currTask.content === content
    );

    if (ifTodoMethod) return;
    setStoreValue((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDelete = (value) => {
    let updateArray = storeValue.filter((Element) => {
      return Element.content !== value;
    });
    setStoreValue(updateArray);
  };

  setDataInLocalStorage(storeValue);
  // to set the data to the local storage
  const handleCheck = (value) => {
    let updatedValues = storeValue.map((currTask) => {
      if (currTask.content === value) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setStoreValue(updatedValues);
  };
  const handleClearAllData = () => {
    setStoreValue([]);
  };
  return (
    <div>
      <div className="container w-full max-w-[1920px] min-h-screen  flex items-center justify-center bg-gradient-to-tr from-orange-800 to-teal-600">
        <section className="bg-gradient-to-tl flex gap-8 shadow-xl sha items-center text-center px-10 py-11 flex-col justify-center  from-emerald-800 to-sky-700">
          <h1 className="text-4xl w-full font-extrabold text-gray-300  from-slate-600 to-black">
            Todo List
          </h1>
          <DateTodo />
          <TodoForm onAddTodo={handleSubmit} />
          <section className="flex flex-col w-full ">
            {storeValue.map((item) => {
              return (
                <List
                  key={item.id}
                  data={item.content}
                  checked={item.checked}
                  onHandleDelete={handleDelete}
                  handleChecked={handleCheck}
                />
              );
            })}
          </section>
          <section className="w-full">
            <button
              className="bg-purple-600 font-semibold w-full text-white py-3 
               rounded-md shadow-md shadow-teal-500"
              onClick={handleClearAllData}
            >
              Clear All
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default TodoList;
