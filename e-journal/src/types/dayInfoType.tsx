import { WorkHour } from "./work-hour"

export interface DayInfoType {
    day: string,
    isWorkingDay: boolean,
    times: WorkHour[]
}

export enum Status {
    Free = "Вільно",
    TemporaryHold = "Очікує підтвердження",
    Reserv = "Підтверджено",
    Done = "Виконано"
}