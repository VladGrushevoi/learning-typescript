import { WorkHour } from "./work-hour"

export interface DayInfoType {
    day: string,
    isWorkingDay: boolean,
    times: WorkTime[]
}

export interface WorkTime {
    workHour: WorkHour[],
    status: Status
}

export enum Status {
    Free = "Вільно",
    TemporaryHold = "Очікує підтвердження",
    Reserv = "Підтверджено",
    Done = "Виконано"
}