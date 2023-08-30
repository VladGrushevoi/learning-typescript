import { Col, Row } from "react-bootstrap";
import { UpdateUserInfoRequest, UpdateUserInfoResponse } from "../../Redux/features/user/PayloadTypes/UserUpdate";
import { updateUser } from "../../Redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/storehooks"
import { appAxios } from "../../appAxios/appAxios";
import { useInput } from "../../hooks/useInput";
import { ProfileItem } from "./ProfileItem"
import { ProfilePhoneItem } from "./ProfilePhoneItem"

interface ProfileProps {

}

export const Profile = ({ }: ProfileProps) => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const firstNameHook = useInput(user.Name, "Name");
    const surnameHook = useInput(user.Surname, "Surname");
    const phoneHook = useInput(user.PhoneNumber, "Phone");

    const handleUpdate = () => {
        const infoToUpdate: UpdateUserInfoRequest = {
            firstName: firstNameHook.value,
            surname: surnameHook.value,
            phoneNumber: phoneHook.value
        }
        appAxios.patch<UpdateUserInfoResponse>("/user/update-information", JSON.stringify(infoToUpdate), {
            headers: {
                "Authorization": "Bearer " + user.JwtToken
            }
        }).then(res => dispatch(updateUser(res.data)));
    }
    
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
                firstNameHook={firstNameHook}
                surnameHook={surnameHook}
                handleUpdate={handleUpdate}
                isEditable={true}
            />
            <ProfilePhoneItem
                title="Моб. номер"
                value={user.PhoneNumber}
                handleUpdate={handleUpdate}
                phoneHook={phoneHook}
                isEditable={true}
            />
            <Row className="py-2">
                <Col md={4} sm={2} xs={2} className="text-gray-500 font-extrabold tracking-widest text-2xl">
                    <span>Кількість сеансів :</span>
                </Col>
                <Col className="md:text-left text-center">
                    {user.RecordHistory.length}
                </Col>
            </Row>
        </>
    )
}