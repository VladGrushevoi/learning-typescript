import { useState } from "react";
import { WorkHour } from "../types/work-hour";
import { WorkDays } from "./work-days";


export const useFakeWorkHour = () => {
    const [workDays, setWorkDays] = useState(WorkDays)

    const timeComparer = (a: WorkHour, b: WorkHour) => {
        const aTimeValue = parseInt(a.hour.split(':')[0]);
        const bTimeValue = parseInt(b.hour.split(':')[0]);

        return aTimeValue - bTimeValue;
    }

    const addNewWorkHour = (dayIndex: number, newWorkHour: WorkHour) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }
        console.log()
        setWorkDays(prev => {
            const days = [...prev];
            days[dayIndex].times.push(newWorkHour)
            days[dayIndex].times.sort(timeComparer)
            return [...days];
        });
    }

    const updateExistingWorkHour = (dayIndex: number, id: number, newTime: string) => {
        if (dayIndex < 0 || dayIndex > 6) {
            return;
        }

        setWorkDays(prevWorkHour => {
            let updWorkHours = [...prevWorkHour[dayIndex].times];
            updWorkHours = updWorkHours.map((hour) => {
                if (hour.id === id) {
                    return { ...hour, hour: newTime };
                }
                return hour;
            });
            updWorkHours.sort(timeComparer);
            prevWorkHour[dayIndex].times = updWorkHours;
            return prevWorkHour;
        });
    }

    return {
        addNewWorkHour,
        updateExistingWorkHour,
        workDays: workDays
    }
}