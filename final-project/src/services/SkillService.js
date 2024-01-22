import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllSkills = createAsyncThunk(
  'skills/getAll',
  async () => await axiosInstance.get('/skill'));
