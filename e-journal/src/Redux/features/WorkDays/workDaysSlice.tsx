import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DayInfoType, Status } from "../../../types/dayInfoType";
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
    workDays: [{
        date: "",
        day: "",
        dayOfWeek: 1,
        isWorkDay: true,
        times: [{
            id: 1,
            status: Status.Canceled,
            time: "00:00",
            userId: "",
            userMessage: ""
        }]
    }]
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