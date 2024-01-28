import { getAllEducations } from "services/EducationService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educations: []
}

const educationSlice = createSlice({
  name: 'education',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEducations.fulfilled, (state, action) => {
      state.educations = action.payload.data;
    });
  }
});

export default educationSlice;