import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllEducations = createAsyncThunk(
  'educations/getAll',
  async () => await axiosInstance.get('/educations'));
