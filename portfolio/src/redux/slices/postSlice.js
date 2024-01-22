import { getAllPosts, getPostById } from "services/PostService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {
    curr: null,
    prev: null,
    next: null
  }
}

const postSlice = createSlice({
  name: 'post',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload.data;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.post = action.payload.data;
    });
  }
});

export default postSlice;