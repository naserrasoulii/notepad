import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
console.log(createAsyncThunk);
const initialState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state) {
      state.value++;
    },
  },
});
export const { addTodo } = counterSlice.actions;
export default counterSlice.reducer;

console.log(counterSlice);
