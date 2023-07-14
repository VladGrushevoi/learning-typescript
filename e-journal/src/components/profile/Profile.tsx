import { User } from "../../types/User"
import { ProfileItem } from "./ProfileItem"

interface ProfileProps {
    userData : User
}

export const Profile = ({ userData }: ProfileProps) => {
    return (
        <>
            <h1
                className="text-center py-4 underline tracking-widest font-bold"
            >
                ОСОБИСТА ІНФОРМАЦІЯ
            </h1>
            
            <ProfileItem title="Ім'я" value={userData.firstName + ' ' + userData.secondName}/>
            <ProfileItem title="Моб. номер" value={userData.phoneNumber}/>
            <ProfileItem title="Кількість сеансів" value={userData.isActiveRecords.length + userData.isDoneRecords.length}/>
        </>
    )
}