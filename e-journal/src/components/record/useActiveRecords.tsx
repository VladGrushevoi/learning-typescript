import { useState } from 'react'
import { ActiveRecord, ActiveRecords } from '../../types/activeRecords';
import { appAxios } from '../../appAxios/appAxios';
import { Status } from '../../types/dayInfoType';

export const useActiveRecords = (userToken: string) => {
    const [activeRecords, setactiveRecords] = useState<ActiveRecord[]>([{
        date: "",
        time: "",
        dayOfWeek: 0,
        userMessage:"",
        workTimeId:"",
        user: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            userId: "",
        }
    }]);

    const fetchActiveRecords = async () => {
        var response = await appAxios.get<ActiveRecords>("/schedule/active-record", {
            headers: {
                Authorization: "Bearer " + userToken,
            }
        })

        if(response.status === 200){
            console.log(activeRecords)
            setactiveRecords(response.data.activeRecords)
        }
    }

    const updateRecordStatus = async (data : {dayofWeek: number, status: Status, workTimeId: string}) => {
        const response = await appAxios.post("/schedule/update-work-time-status", JSON.stringify(data), {
            headers: {
                Authorization: "Bearer " + userToken
            }
        });
        if(response.status === 200){
            setactiveRecords(prev => prev.filter(x => x.workTimeId !== data.workTimeId))
        }
    }

    return {
        activeRecords,
        fetchActiveRecords,
        updateRecordStatus
    }
}