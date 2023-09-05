import { useState } from 'react'
import { ActiveRecord, ActiveRecords } from '../../types/activeRecords';
import { appAxios } from '../../appAxios/appAxios';

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

    return {
        activeRecords,
        fetchActiveRecords
    }
}