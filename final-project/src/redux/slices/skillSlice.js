import { getAllSkills } from "services/SkillService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: []
}

const skillSlice = createSlice({
  name: 'skill',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSkills.fulfilled, (state, action) => {
      state.skills = action.payload.data;
    });
  }
});

export default skillSlice;