import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { weeklyScheduleSlice } from "./features/WorkDays/workDaysSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        schedule: weeklyScheduleSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;