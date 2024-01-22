import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllPosts = createAsyncThunk(
  'posts/getAll',
  async () => await axiosInstance.get('/posts'));

export const getPostById = createAsyncThunk(
    'posts/getById',
    async (id) => await axiosInstance.get(`/posts/${id}`));