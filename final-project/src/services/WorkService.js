import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllWorks = createAsyncThunk(
  'works/getAll',
  async () => await axiosInstance.get('/works'));
