import { User } from "../../types/User"
import { ProfileItem } from "./ProfileItem"
import { ProfilePhoneItem } from "./ProfilePhoneItem"

interface ProfileProps {
    userData : User,
    updateUser: (newUserData: User) => void,
}

export const Profile = ({ userData, updateUser }: ProfileProps) => {
    return (
        <>
            <h1
                className="text-center py-4 underline tracking-widest font-bold"
            >
                ОСОБИСТА ІНФОРМАЦІЯ
            </h1>
            
            <ProfileItem 
                title="Ім'я" 
                value={userData.firstName + ' ' + userData.secondName}
                isEditable={true}
                updateUser={updateUser}
            />
            <ProfilePhoneItem 
                title="Моб. номер" 
                value={userData.phoneNumber}
                isEditable={true}
                updateUser={updateUser}
            />
            <ProfileItem 
                title="Кількість сеансів" 
                value={(userData.isActiveRecords.length + userData.isDoneRecords.length).toString()}
                isEditable={false}
                updateUser={updateUser}
            />
        </>
    )
}