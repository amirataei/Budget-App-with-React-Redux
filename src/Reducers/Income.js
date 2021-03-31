export const Todoes = (state = [], action) => {

  const removes = state.filter((item) => {
    return item.id !== action.id2;
  })
 console.log(state)
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          price: action.price,
        },
      ];
    case "DELETE_TODO":
      return [...removes];

    default:
      return state;
  }
};
