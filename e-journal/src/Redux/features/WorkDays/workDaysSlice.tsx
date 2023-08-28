import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DayInfoType } from "../../../types/dayInfoType";
import { ActualWeeklyScheduleRsponse } from "./PayloadTypes/ActaulWeeklySchedule";
import { RootState } from "../../store";

interface WeeklySchedule {
    id: string,
    weekId: string,
    workDays: DayInfoType[]
}
const initialState : WeeklySchedule = {
    id:"",
    weekId:"",
    workDays: []
}

export const weeklyScheduleSlice = createSlice({
    name: "weeklySchedule",
    initialState: initialState,
    reducers: {
        getActaulWeeklySchedule: (state, action: PayloadAction<ActualWeeklyScheduleRsponse>) => {
            console.log(action.payload);
            state.weekId = action.payload.actualWeeklySchedule.weekId;
            state.workDays = action.payload.actualWeeklySchedule.workDays
        }
    }
});

export const { getActaulWeeklySchedule } = weeklyScheduleSlice.actions;
export default weeklyScheduleSlice.reducer;
export const selectWeeklySchedule = (state: RootState) => state.schedule; 