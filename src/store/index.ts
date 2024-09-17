import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    "Fazer aquele café sacrossanto",
    "Estudar Redux",
    "Dar aquele rolê soviético de Civic Si rebaixado",
  ],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
