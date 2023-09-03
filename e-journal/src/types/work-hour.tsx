import { Status } from "./dayInfoType";

export interface WorkTime {
    id: number,
    time: string,
    status: Status,
    userId: string | null,
    userMessage: string | null
}