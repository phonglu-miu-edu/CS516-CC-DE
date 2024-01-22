import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosService";

export const createContact = createAsyncThunk(
    'contacts/create',
    async (payload) => await axiosInstance.post('/contacts', payload));