import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./Reducer/Todos";

export const store = configureStore({
  reducer: todosReducer,
  //   devTools: false, // true
});
