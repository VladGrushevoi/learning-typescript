import { Col, Row } from "react-bootstrap"
import { Profile } from "../../profile/Profile"
import { Recordtable } from "../../record/RecordTable"
import { useAppDispatch, useAppSelector } from "../../../Redux/storehooks"
import { RootState } from "../../../Redux/store"
import { useEffect } from "react"
import { appAxios } from "../../../appAxios/appAxios"
import { UserInformationResponse } from "../../../Redux/features/user/PayloadTypes/getFullInformation"
import { getUserInfo } from "../../../Redux/features/user/userSlice"

interface ProfilePageProps {

}

export const ProfilePage = ({ }: ProfilePageProps) => {

    const user = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await appAxios.get<UserInformationResponse>("/user/info", {
                headers: {
                    Authorization: "Bearer " + user.JwtToken,
                }
            })
            dispatch(getUserInfo(response.data))
        }

        fetchUserInfo()
    }, []);

    return (
        <>
                <Row className="gap-4 justify-center px-6 py-4">
                    <Col md={5} className="border-2 border-black rounded-lg md:h-[80vh] h-[50vh] text-xl shadow-2xl" >
                        <Profile />
                    </Col>
                    {/* <Col md={2} xs={2} sm={2} className="my-4 md:m-0"></Col> */}
                    <Col md={6} sm={12} xs={12} className="border-2 border-green-400 rounded-lg md:h-[80vh] h-[80vh] shadow-2xl">
                        <h1
                            className="text-center mt-4 underline tracking-widest font-bold"
                        >
                            ІСТОРІЯ ЗАПИСІВ
                        </h1>
                            <Recordtable records={user.user.recordHistoryItems} />
                    </Col>
                </Row>
        </>
    )
}