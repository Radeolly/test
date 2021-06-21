import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" }
];

export const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },

    removePost(state, action) {
      state.filter((post) => post.id !== action.payload);
    }
  }
});

export const { postAdded, removePost } = slice.actions;

export const selectCount = (state) => state.counter.value;

export default slice.reducer;