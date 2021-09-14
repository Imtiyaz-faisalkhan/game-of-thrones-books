import { createStore } from "redux";
import ReducerBook from "./Reducer";

export default () => {
    const store = createStore(ReducerBook,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};
