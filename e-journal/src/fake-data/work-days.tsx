import { DayInfoType, Status } from "../types/dayInfoType";

export const WorkDays : DayInfoType[] = [
    {
        day: "Понеділок",
        isWorkingDay: false,
        times: []
    },
    {
        day: "Вівторок",
        isWorkingDay: true,
        times: [
            {
                id: 1,
                hour: "9:00",
                status: Status.Free,
                userId: ""
            }
        ]
    },
    {
        day: "Середа",
        isWorkingDay: false,
        times: []
    },
    {
        day: "Четвер",
        isWorkingDay: false,
        times: []
    },
    {
        day: "П'ятниця",
        isWorkingDay: false,
        times: []
    },
    {
        day: "Субота",
        isWorkingDay: false,
        times: []
    },
    {
        day: "Неділя",
        isWorkingDay: false,
        times: []
    },
    
]