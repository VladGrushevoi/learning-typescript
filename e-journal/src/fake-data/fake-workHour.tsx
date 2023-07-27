import { useState } from "react";
import { WorkHour } from "../types/work-hour";


export const useFakeWorkHour = () => {
    const [workHour, setWorkHour] = useState([[], [], [], [], [], [], []] as WorkHour[][])

    const timeComparer = (a: WorkHour, b: WorkHour) => {
        const aTimeValue = parseInt(a.hour.split(':')[0]);
        const bTimeValue = parseInt(b.hour.split(':')[0]);

        return aTimeValue - bTimeValue;
    }

    const addNewWorkHour = (dayIndex: number, newWorkHour: WorkHour) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }
        setWorkHour(prevWorkHour => {
            const updWorkHours = [...prevWorkHour];
            updWorkHours[dayIndex] = [...updWorkHours[dayIndex], newWorkHour];
            updWorkHours[dayIndex].sort(timeComparer);
            return updWorkHours;
        });
    }

    const updateExistingWorkHour = (dayIndex: number, id: number, newTime: string) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }

        setWorkHour(prevWorkHour => {
            const updWorkHours = [...prevWorkHour];
            updWorkHours[dayIndex] = updWorkHours[dayIndex].map((hour) => {
                if (hour.id === id) {
                    return { ...hour, hour: newTime };
                }
                return hour;
            });
            updWorkHours[dayIndex].sort(timeComparer);
            return updWorkHours;
        });
    }

    return {
        addNewWorkHour,
        updateExistingWorkHour,
        workHour
    }
}