import { useState } from "react";
import { WorkHour } from "../types/work-hour";

const fake_workHour: WorkHour[][] = [[], [], [], [], [], [], []];

export const useFakeWorkHour = () => {
    const [workHour, setWorkHour] = useState(fake_workHour)

    const timeComparer = (a: WorkHour, b: WorkHour) => {
        const aTimeValue = parseInt(a.hour.split(':')[0]);
        const bTimeValue = parseInt(b.hour.split(':')[0]);

        return aTimeValue - bTimeValue;
    }

    const addNewWorkHour = (dayIndex: number, newWorkHour: WorkHour) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }
        let updWorkHours = workHour;
        console.log(workHour)
        updWorkHours[dayIndex] = [...updWorkHours[dayIndex], newWorkHour];
        updWorkHours[dayIndex].sort(timeComparer)

        setWorkHour(updWorkHours)

    }

    const updateExistingWorkHour = (dayIndex: number, id: number, newTime: string) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }

        let updWorkHours = workHour;
        updWorkHours[dayIndex] = updWorkHours[dayIndex].map((hour) => {
            if (hour.id === id) {
                hour.hour = newTime;
                return hour;
            }
            return hour;
        });
        updWorkHours[dayIndex].sort(timeComparer)

        setWorkHour(updWorkHours)
    }

    return {
        addNewWorkHour,
        updateExistingWorkHour,
        workHour
    }
}