import { createContact } from "services/ContactService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageSent: false
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: {...initialState},
  reducers: {
    resetContact: state => {
      state.messageSent = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createContact.fulfilled, (state, action) => {
      if (action.payload.data === true) {
        state.messageSent = true;
      }
    });
  }
});

export const { resetContact } = contactSlice.actions;

export default contactSlice;