import { combineReducers } from "redux";
import {Todoes} from './Income'
import {Expense} from './Expense'
export default combineReducers({
  Todoes,
  Expense
});
