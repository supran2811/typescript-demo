import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";
import { ToDo } from "../actions/todos";

export interface StoreState {
  todos: ToDo[];
}

export const reducers = combineReducers<StoreState>({
  todos: toDoReducer,
});
