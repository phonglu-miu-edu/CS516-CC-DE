import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const getAllTestimonials = createAsyncThunk(
  'testimonials/getAll',
  async () => await axiosInstance.get('/testimonial'));
