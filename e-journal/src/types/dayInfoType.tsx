import { WorkTime } from "./work-hour"

export interface DayInfoType {
    day: string,
    isWorkDay: boolean,
    dayOfWeek: number,
    date: string,
    times: WorkTime[]
}

export enum Status {
    Free = 0,
    TemporaryHold = 1,
    Reserv = 2,
    Done = 3,
    Canceled = 4
}