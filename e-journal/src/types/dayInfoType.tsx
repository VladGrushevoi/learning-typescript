export interface DayInfoType {
    day: string,
    times: WorkTime[]
}

export interface WorkTime {
    time: string,
    status: Status
}

export enum Status {
    Free = "Вільно",
    TemporaryHold = "Очікує підтвердження",
    Reserv = "Підтверджено"
}