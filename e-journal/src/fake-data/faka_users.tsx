import { User } from "../types/User";
import { Status } from "../types/dayInfoType";

export const FakeUsers : User[] = [
    {
        firstName: "Petro",
        secondName: "Petrenko",
        phoneNumber: "+380966051501",
        isActiveRecords: [
            {
                date: "15.07.2023",
                status: Status.Reserv,
                time: "11:00"
            },
            {
                date: "15.07.2023",
                status: Status.Reserv,
                time: "11:00"
            },
            {
                date: "15.07.2023",
                status: Status.Reserv,
                time: "11:00"
            },
            {
                date: "15.07.2023",
                status: Status.Reserv,
                time: "11:00"
            },
            {
                date: "15.07.2023",
                status: Status.Reserv,
                time: "11:00"
            },
        ],
        isDoneRecords: [
            {
                time: "11:00",
                date: "15.07.2023",
                status: Status.Done,
            },
            {
                time: "11:00",
                date: "15.07.2023",
                status: Status.Done,
            },
            {
                time: "11:00",
                date: "15.07.2023",
                status: Status.Done,
            },
            {
                time: "11:00",
                date: "15.07.2023",
                status: Status.Done,
            },
            {
                time: "11:00",
                date: "15.07.2023",
                status: Status.Done,
            },
        ],
    }
]