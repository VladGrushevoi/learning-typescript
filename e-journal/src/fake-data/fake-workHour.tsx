
export const useWeeklySchedule = () => {
    //const weeklySchedule = useAppSelector((state: RootState) => state.schedule)
    //const dispatch = useAppDispatch();
    // useEffect(() =>{

    // }, [])

    // const timeComparer = (a: WorkTime, b: WorkTime) => {
    //     const aTimeValue = parseInt(a.time.split(':')[0]);
    //     const bTimeValue = parseInt(b.time.split(':')[0]);

    //     return aTimeValue - bTimeValue;
    // }

    // const addNewWorkHour = (dayIndex: number, newWorkHour: WorkTime) => {
    //     if (dayIndex < 0 || dayIndex > 6) {
    //         return;
    //     }
    //     console.log()
        // setWorkDays(prev => {
        //     const days = [...prev];
        //     days[dayIndex].times.push(newWorkHour)
        //     days[dayIndex].times.sort(timeComparer)
        //     return [...days];
        // });
    //}

    // const updateExistingWorkHour = (dayIndex: number, id: number, newTime: string) => {
    //     if (dayIndex < 0 || dayIndex > 6) {
    //         return;
    //     }

        // setWorkDays(prevWorkHour => {
        //     let updWorkHours = [...prevWorkHour[dayIndex].times];
        //     updWorkHours = updWorkHours.map((hour) => {
        //         if (hour.id === id) {
        //             return { ...hour, time: newTime };
        //         }
        //         return hour;
        //     });
        //     updWorkHours.sort(timeComparer);
        //     prevWorkHour[dayIndex].times = updWorkHours;
        //     return prevWorkHour;
        // });
    //}

    return {
        //addNewWorkHour,
        //updateExistingWorkHour,
        //workDays: weeklySchedule
    }
}