import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;

export const addTodo = (text: string) => {
  return { type: ADD_TODO, text };
};

export const deleteTodo = (id: number) => {
  return { type: DELETE_TODO, id };
};

type Action = {
  type: string;
  text: string;
};

let count: number = 0;

export interface State {
  id: number;
  text: string;
}

export const initialState: {
  id: number;
  text: string;
}[] = [];

type Actions = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo>;

function todoReducer(state = [], action: Action) {
  switch (action.type) {
    case "ADD_TODO":
      let text = action.text;
      return [...state, { id: count++, text }];
    default:
      return state;
  }
}
export const store = createStore(todoReducer);
store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
