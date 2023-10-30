import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const allReducer = combineReducers({
  todoReducer
})

const store = createStore(allReducer)

export default store