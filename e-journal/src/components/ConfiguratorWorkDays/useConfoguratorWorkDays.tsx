import { useState } from 'react'
import { appAxios } from '../../appAxios/appAxios';

export interface WorkDay {
    isWorkDay: boolean,
    dayOfWeek: number,
    date: string,
    times: WorkTime[],
    id: string,
    createdAt: string,
    updateAt: string
}

export interface WorkTime {
    time: string,
    status: number,
    userId: string,
    userMessage: string | null,
    id: string,
    createdAt: string,
    updateAt: string
}

export const useConfiguratorWorkDay = (userToken: string) => {
    const [workDays, setWorkDays] = useState<WorkDay[]>();

    const fetchWorkDaysInfo = async () => {
        const response = await appAxios.get<{workDays: WorkDay[]}>("/schedule/work-days", {
            headers: {
                Authorization: "Bearer " + userToken,
            }
        })
        if(response.status === 200){
            setWorkDays(response.data.workDays)
        }
    }
    return {
        workDays,
        fetchWorkDaysInfo,
    }
}