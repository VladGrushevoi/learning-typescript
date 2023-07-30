import { Status } from "./dayInfoType";

export interface WorkHour {
    id: number,
    hour: string,
    status: Status,
    userId: string | null
}