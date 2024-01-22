import { getAllTestimonials } from "services/TestimonialService";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: []
}

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: {...initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTestimonials.fulfilled, (state, action) => {
      state.testimonials = action.payload.data;
    });
  }
});

export default testimonialSlice;