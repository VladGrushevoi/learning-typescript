import { Status } from "./dayInfoType"

export interface User {
    id: string,
    firstName: string,
    secondName: string,
    phoneNumber: string,
    isActiveRecords: Record[],
    isDoneRecords: Record[]
}

export interface Record {
    time: string,
    date: string,
    status: Status
}

export enum UserRole{
    Admin = 0,
    User = 1,
    Undefined = 2,
}