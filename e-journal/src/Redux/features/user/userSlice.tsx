import { UserRole } from "../../../types/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserLoginInfoResponse } from "./PayloadTypes/userLogin";
import { RootState } from "../../store";
import { UpdateUserInfoResponse } from "./PayloadTypes/UserUpdate";

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
        login: (state, action: PayloadAction<UserLoginInfoResponse>) => {
            state.JwtToken = action.payload.jwtToken;
            state.Name = action.payload.name;
            state.Surname = action.payload.surname;
            state.Role = action.payload.role;
            state.PhoneNumber = action.payload.phoneNumber;
            state.isLogin = action.payload.jwtToken ? true : false;
        },
        updateUser: (state, action: PayloadAction<UpdateUserInfoResponse>) => {
            var [firstName, surname] = action.payload.fullName.split(" ");
            state.Name = firstName;
            state.Surname = surname;
            state.PhoneNumber = action.payload.phoneNumber.at(3)!
        },
        // getUserInfo: (state, action: PayloadAction<UpdateUserInfoResponse>) => {

        // }
    }
});

export const { login, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
export const selectUser = (state: RootState) => state.user; 