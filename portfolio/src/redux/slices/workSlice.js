import { getAllWorks } from "services/WorkService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  works: []
}

const workSlice = createSlice({
  name: 'work',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWorks.fulfilled, (state, action) => {
      state.works = action.payload.data;
    });
  }
});

export default workSlice;