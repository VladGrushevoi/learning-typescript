import { DayInfoType } from "../../../../types/dayInfoType";

export interface ActualWeeklyScheduleRsponse {
    actualWeeklySchedule: {
        weekId: string,
        workDays: DayInfoType[]
    }
}