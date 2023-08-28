import { UserRole } from "../../../types/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userLoginInfoResponse } from "./PayloadTypes/userLogin";
import { RootState } from "../../store";

interface UserState {
    isLogin: boolean,
    JwtToken: string,
    Name: string,
    Surname: string,
    PhoneNumber: string,
    Role: UserRole,
    RecordHistory: [],
}

const initialState: UserState = {
    isLogin: false,
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
        login: (state, action: PayloadAction<userLoginInfoResponse>) => {
            state.JwtToken = action.payload.jwtToken;
            state.Name = action.payload.name;
            state.Surname = action.payload.surname;
            state.Role = action.payload.role;
            state.isLogin = action.payload.jwtToken ? true : false;
        },
    }
});

export const { login } = UserSlice.actions;
export default UserSlice.reducer;
export const selectUser = (state: RootState) => state.user; 