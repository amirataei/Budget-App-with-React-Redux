export const Expense = (state = [], action) => {

  const remove = state.filter((item) => {
    return item.id !== action.id3;
  })
  console.log(state)
    switch (action.type) {
      case "ADD_EXPENSE":
        return [
          ...state,
          {
            id: action.id2,
            text: action.text,
            price : action.price
          },
        ];
        case "DELETE_EXPENSE":
          return [...remove];
  
      default:
        return state;
    }
  };
  