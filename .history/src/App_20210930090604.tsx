import "./styles.css";
import { store, addTodo } from "./index";
import * as React from "react";

export default function App() {
  const [todo, setTodo] = React.useState("");
  const state = store.getState();
  React.useEffect(() => {}, []);
  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => store.dispatch(addTodo(todo))}>追加</button>
      {state ? state.map((i) => <p>{i.text}</p>) : null}
    </div>
  );
}