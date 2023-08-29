import { useAppSelector } from "../../Redux/storehooks"
import { ProfileItem } from "./ProfileItem"
import { ProfilePhoneItem } from "./ProfilePhoneItem"

interface ProfileProps {

}

export const Profile = ({  }: ProfileProps) => {
    const user = useAppSelector(state => state.user);
    
    return (
        <>
            <h1
                className="text-center py-4 underline tracking-widest font-bold"
            >
                ОСОБИСТА ІНФОРМАЦІЯ
            </h1>
            
            <ProfileItem 
                title="Ім'я" 
                value={user.Name + ' ' + user.Surname}
                isEditable={true}
                updateUser={() => console.log("UPDATE")}
            />
            <ProfilePhoneItem 
                title="Моб. номер" 
                value={user.PhoneNumber}
                isEditable={true}
                updateUser={() => console.log("Update")}
            />
            <ProfileItem 
                title="Кількість сеансів" 
                value={user.RecordHistory.length.toString()}
                isEditable={false}
                updateUser={() => console.log("Not update")}
            />
        </>
    )
}