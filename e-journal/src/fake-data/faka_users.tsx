import { useState } from "react";
import { User } from "../types/User";
import { Status } from "../types/dayInfoType";

export const FakeUser : User = 
    {
        id: "1111",
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

export const useFakeUser = () => {
    const [fakeUser, setFakeUser] = useState(FakeUser);

    const updateUser = (newUserData: User) => {
        setFakeUser(newUserData);
    }

    return {
        fakeUser,
        updateUser
    }
}