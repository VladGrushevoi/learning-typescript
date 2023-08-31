import { Status } from "./dayInfoType"

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    role: UserRole,
    recordHistoryItems: Record[]
}

export interface Record {
    workTimeId: string,
    date: string,
    dayOfWeek: number,
    status: Status,
    id: string,
}

export enum UserRole{
    Admin = 0,
    User = 1,
    Undefined = 2,
}