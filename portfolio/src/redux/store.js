import { configureStore } from '@reduxjs/toolkit';
import contactSlice from "./slices/contactSlice";
import postSlice from "./slices/postSlice";
import educationSlice from "./slices/educationSlice";
import skillSlice from "./slices/skillSlice";
import testimonialSlice from "./slices/testimonialSlice";
import workSlice from "./slices/workSlice";

export const store = configureStore({
    reducer: {
        contact: contactSlice.reducer,
        post: postSlice.reducer,
        education: educationSlice.reducer,
        skill: skillSlice.reducer,
        testimonial: testimonialSlice.reducer,
        work: workSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});
