import { getAllPosts } from "services/PostService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload.data;
    });
  }
});

export default postSlice;