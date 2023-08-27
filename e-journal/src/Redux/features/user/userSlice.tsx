import { UserRole } from "../../../types/User";
import { createSlice } from "@reduxjs/toolkit"

interface UserState {
    JwtToken: string,
    Name: string,
    Surname: string,
    PhoneNumber: string,
    Role: UserRole,
    RecordHistory: [],
}

const initialState : UserState = {
    JwtToken: "",
    Name: "",
    PhoneNumber: "",
    RecordHistory: [],
    Role: UserRole.Undefined,
    Surname: "",
}

export const UserSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        login : (state) => UserLoginAction(state),
    }
});

const UserLoginAction = (state: UserState) => {

}