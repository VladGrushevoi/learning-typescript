import { DayInfoType, Status } from "../types/dayInfoType";

export const WorkDays : DayInfoType[] = [
    {
        day: "Понеділок",
        times: []
    },
    {
        day: "Вівторок",
        times: [
            {
                status: Status.Free,
                time: "9:00",
            },
            {
                status: Status.Free,
                time: "10:00",
            },
            {
                status: Status.TemporaryHold,
                time: "11:00",
            },
            {
                status: Status.Reserv,
                time: "12:00",
            },
            {
                status: Status.Free,
                time: "13:00",
            },
            {
                status: Status.Free,
                time: "14:00",
            }
        ]
    },
    {
        day: "Середа",
        times: []
    },
    {
        day: "Четвер",
        times: [
            {
                status: Status.Reserv,
                time: "9:00",
            },
            {
                status: Status.TemporaryHold,
                time: "10:00",
            },
            {
                status: Status.Free,
                time: "11:00",
            },
            {
                status: Status.Reserv,
                time: "12:00",
            },
            {
                status: Status.Free,
                time: "13:00",
            },
            {
                status: Status.Free,
                time: "14:00",
            }
        ]
    },
    {
        day: "П'ятниця",
        times: []
    },
    {
        day: "Субота",
        times: [
            {
                status: Status.Reserv,
                time: "9:00",
            },
            {
                status: Status.TemporaryHold,
                time: "10:00",
            },
            {
                status: Status.Free,
                time: "11:00",
            },
            {
                status: Status.Reserv,
                time: "12:00",
            },
            {
                status: Status.Free,
                time: "13:00",
            },
            {
                status: Status.Free,
                time: "14:00",
            }
        ]
    },
    {
        day: "Неділя",
        times: []
    },
]