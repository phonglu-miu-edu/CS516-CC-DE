import { configureStore } from '@reduxjs/toolkit';
import reportSlice from "./slices/reportSlice";

export const store = configureStore({
    reducer: {
        report: reportSlice.reducer
    }
});
