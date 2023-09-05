export interface ActiveRecords{
    activeRecords: ActiveRecord[]
}

export interface ActiveRecord {
    workTimeId: string,
    dayOfWeek: number,
    date: string,
    time: string,
    userMessage: string,
    user: {
        userId: string,
        firstName: string,
        lastName: string,
        phoneNumber: string
    }
}