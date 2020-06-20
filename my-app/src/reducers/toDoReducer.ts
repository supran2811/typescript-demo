import { ToDo, Action } from "../actions/todos";
import { ActionTypes } from "../actions/types";
export function toDoReducer(state: ToDo[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.fetchTodos: {
      return action.payload;
    }
    case ActionTypes.deleteTodo: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
}
