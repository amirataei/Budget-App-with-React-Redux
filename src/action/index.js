let nextToDoid = 0;
let nextToDoid2 = 0;
export const AddTodo = (text, price) => ({
  type: "ADD_TODO",
  id: nextToDoid++,
  text,
  price,
});
export const AddTodo2 = (text, price) => ({
  type: "ADD_EXPENSE",
  id2: nextToDoid2++,
  text,
  price,
});
export const DeleteTodos = (id2) => ({
  type: "DELETE_TODO",
  id2,
});
export const DeleteExpense = (id3) => ({
  type: "DELETE_EXPENSE",
  id3
})