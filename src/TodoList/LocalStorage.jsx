let todoKey = "ReactTodo";
export const GetdataFromLocalStorage = () => {
  const rawTodos = localStorage.getItem(todoKey);
  return rawTodos ? JSON.parse(rawTodos) : [];
};
export const setDataInLocalStorage = (storeValue) => {
  localStorage.setItem(todoKey, JSON.stringify(storeValue));
};
